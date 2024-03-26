import styled from '@emotion/styled';
import { AccordionDetails } from '@mui/material';
import axios from 'axios';
import { ContainedButton } from 'components/button/ButtonStyle';
import dayjs from 'dayjs';
import createError from 'http-errors';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputAccordion from './InputAccordion';
import InputEventDate from './InputDate';
import InputDescription from './InputDescription';
import InputLocation from './InputLocation';
import InputPeriod from './InputPeriod';
import InputPrice from './InputPrice';
import InputQuantity from './InputQuantity';
import InputThumbnail, { FileWithPreview } from './InputThumbnail';
import InputTime from './InputTime';
import InputTitle from './InputTitle';

const TicketingRegisterContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const TicketingRegisterContent = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [eventDate, setEventDate] = useState(dayjs().add(1, 'month'));

    const [startTime, setStartTime] = useState(dayjs().set('hour', 9).set('minute', 0));
    const [endTime, setEndTime] = useState(dayjs().set('hour', 18).set('minute', 0));

    const [location, setLocation] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [saleStartDate, setSaleStartDate] = useState(
        dayjs().add(1, 'day').set('h', 9).set('m', 0),
    );
    const [saleEndDate, setSaleEndDate] = useState(dayjs().add(2, 'day').set('h', 18).set('m', 0));
    const [thumbnail, setThumbnail] = useState<FileWithPreview | null>(null);

    const [isValidTitle, setTitleValidation] = useState(true);
    const [isValidEventTime, setEventTimeValidation] = useState(true);
    const [isValidLocation, setLocationValidation] = useState(true);
    const [isValidPrice, setPriceValidation] = useState(true);
    const [isValidQuantity, setQuantityValidation] = useState(true);
    const [isValidSalePeriod, setSalePeriodValidation] = useState(true);

    const [eventTime, setEventTime] = useState(
        eventDate.set('h', startTime.get('h')).set('m', startTime.get('m')),
    );

    const inputRef = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
        setEventTime(eventDate.set('h', startTime.get('h')).set('m', startTime.get('m')));
    }, [eventDate, startTime]);

    const validateInput = () => {
        if (!title) {
            setTitleValidation(false);
            inputRef.current[0].focus();
            throw createError(400, 'Title must should not be empty.');
        } else {
            setTitleValidation(true);
        }

        if (!isValidEventTime) {
            inputRef.current[1].focus();
            throw createError(400, 'Start time must be before end time.');
        }

        if (!location) {
            setLocationValidation(false);
            inputRef.current[2].focus();
            throw createError(400, 'Location should not be empty.');
        } else {
            setLocationValidation(true);
        }

        if (!price) {
            setPriceValidation(false);
            inputRef.current[3].focus();
            throw createError(400, 'Price must be at least 1.');
        } else {
            setPriceValidation(true);
        }

        if (!quantity) {
            setQuantityValidation(false);
            inputRef.current[4].focus();
            throw createError(400, 'Quantity must be at least 1.');
        } else {
            setQuantityValidation(true);
        }

        if (!isValidSalePeriod) {
            inputRef.current[5].focus();
            throw createError(400, 'Start Date must be before end date.');
        }
    };

    const submit = async () => {
        validateInput();

        const body = {
            title,
            description,
            eventTime: eventTime.format('YYYY-MM-DD HH:mm'),
            runningMinutes: endTime.diff(startTime, 'm'),
            stock: quantity,
            price,
            location,
            saleStart: saleStartDate.set('h', 0).set('m', 0).format('YYYY-MM-DD HH:mm'),
            saleEnd: saleEndDate.set('h', 24).set('m', 0).format('YYYY-MM-DD HH:mm'),
            category: 'none',
        };

        axios
            .post('/api/ticketings/', body, { withCredentials: true })
            .then((res: { data: { data: { ticketingId: string; createdAt: Date } } }) => {
                navigate(`/ticketing/${res.data.data.ticketingId}`);
            })
            .catch(err => {
                alert('티케팅 등록에 실패했습니다.');
                console.error(err);
            });
    };

    return (
        <>
            <TicketingRegisterContentContainer>
                <InputAccordion tag="제목" preview={title}>
                    <AccordionDetails>
                        <InputTitle
                            setTitle={setTitle}
                            isValid={isValidTitle}
                            inputRef={inputRef}
                        />
                    </AccordionDetails>
                </InputAccordion>

                <InputAccordion tag="설명" preview={description}>
                    <AccordionDetails>
                        <InputDescription setDescription={setDescription} />
                    </AccordionDetails>
                </InputAccordion>

                <InputAccordion tag="날짜" preview={eventDate.format('YYYY-MM-DD')}>
                    <AccordionDetails>
                        <InputEventDate date={eventDate} setDate={setEventDate} />
                    </AccordionDetails>
                </InputAccordion>

                <InputAccordion
                    tag="시간"
                    preview={`${startTime.format('HH:mm')} - ${endTime.format('HH:mm')}`}
                >
                    <AccordionDetails>
                        <InputTime
                            startTime={startTime}
                            setStartTime={setStartTime}
                            endTime={endTime}
                            setEndTime={setEndTime}
                            inputRef={inputRef}
                            setValidationValue={setEventTimeValidation}
                        />
                    </AccordionDetails>
                </InputAccordion>

                <InputAccordion tag="장소" preview={location}>
                    <AccordionDetails>
                        <InputLocation
                            setLocation={setLocation}
                            isValid={isValidLocation}
                            inputRef={inputRef}
                        />
                    </AccordionDetails>
                </InputAccordion>

                <InputAccordion tag="수량" preview={quantity.toLocaleString()}>
                    <AccordionDetails>
                        <InputQuantity
                            setQuantity={setQuantity}
                            isValid={isValidQuantity}
                            inputRef={inputRef}
                        />
                    </AccordionDetails>
                </InputAccordion>

                <InputAccordion tag="가격" preview={price.toLocaleString() + ' KRW'}>
                    <AccordionDetails>
                        <InputPrice
                            setPrice={setPrice}
                            isValid={isValidPrice}
                            inputRef={inputRef}
                        />
                    </AccordionDetails>
                </InputAccordion>

                <InputAccordion
                    tag="판매 기간"
                    preview={`${saleStartDate.format('YYYY-MM-DD')} ~ ${saleEndDate.format('YYYY-MM-DD')}`}
                >
                    <AccordionDetails>
                        <InputPeriod
                            startDate={saleStartDate}
                            setStartDate={setSaleStartDate}
                            endDate={saleEndDate}
                            setEndDate={setSaleEndDate}
                            inputRef={inputRef}
                            setValidationValue={setSalePeriodValidation}
                            eventTime={eventTime}
                        ></InputPeriod>
                    </AccordionDetails>
                </InputAccordion>

                <InputAccordion tag="썸네일" preview={thumbnail?.name}>
                    <AccordionDetails>
                        <InputThumbnail thumbnail={thumbnail} setThumbnail={setThumbnail} />
                    </AccordionDetails>
                </InputAccordion>
            </TicketingRegisterContentContainer>
            <ContainedButton
                style={{ margin: '40px', fontSize: 14, color: 'white', width: '20%' }}
                onClick={submit}
                type={'button'}
            >
                등록하기
            </ContainedButton>
        </>
    );
};

export default TicketingRegisterContent;
