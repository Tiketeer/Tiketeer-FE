import { AccordionDetails } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import InputAccordion from './InputAccordion';
import InputDate from './InputDate';
import InputDescription from './InputDescription';
import InputLocation from './InputLocation';
import InputPrice from './InputPrice';
import InputQuantity from './InputQuantity';
import InputThumbnail, { FileWithPreview } from './InputThumbnail';
import InputTime from './InputTime';
import InputTitle from './InputTitle';

const TicketingRegister = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(dayjs('2024-03-11'));

    const [startTime, setStartTime] = useState(dayjs('2024-03-11T11:30'));
    const [endTime, setEndTime] = useState(dayjs('2024-03-11T15:30'));

    const [price, setPrice] = useState(10000);
    const [location, setLocation] = useState('');
    const [quantity, setQuantity] = useState(100);
    const [thumbnail, setThumbnail] = useState<FileWithPreview | null>(null);

    return (
        <>
            <InputAccordion tag="제목" preview={title}>
                <AccordionDetails>
                    <InputTitle setTitle={setTitle} />
                </AccordionDetails>
            </InputAccordion>

            <InputAccordion tag="설명" preview={description}>
                <AccordionDetails>
                    <InputDescription setDescription={setDescription} />
                </AccordionDetails>
            </InputAccordion>

            <InputAccordion tag="날짜" preview={startDate.format('YYYY-MM-DD')}>
                <AccordionDetails>
                    <InputDate date={startDate} setDate={setStartDate} />
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
                    />
                </AccordionDetails>
            </InputAccordion>

            <InputAccordion tag="수량" preview={quantity.toLocaleString()}>
                <AccordionDetails>
                    <InputQuantity setQuantity={setQuantity} />
                </AccordionDetails>
            </InputAccordion>

            <InputAccordion tag="가격" preview={price.toLocaleString() + ' KRW'}>
                <AccordionDetails>
                    <InputPrice setPrice={setPrice} />
                </AccordionDetails>
            </InputAccordion>

            <InputAccordion tag="장소" preview={location}>
                <AccordionDetails>
                    <InputLocation setLocation={setLocation} />
                </AccordionDetails>
            </InputAccordion>

            <InputAccordion tag="썸네일" preview={thumbnail?.name}>
                <AccordionDetails>
                    <InputThumbnail thumbnail={thumbnail} setThumbnail={setThumbnail} />
                </AccordionDetails>
            </InputAccordion>
        </>
    );
};

export default TicketingRegister;
