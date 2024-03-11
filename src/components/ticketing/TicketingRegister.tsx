import InputTitle from './InputTitle';
import InputDescription from './InputDescription';
import { AccordionDetails } from '@mui/material';
import InputAccordion from './InputAccordion';
import InputDate from './InputDate';
import { useState } from 'react';
import dayjs from 'dayjs';
const TicketingRegister = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(dayjs('2024-03-11'));

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

            <InputAccordion tag="날짜" preview={date.format('YYYY-MM-DD')}>
                <AccordionDetails>
                    <InputDate date={date} setDate={setDate} />
                </AccordionDetails>
            </InputAccordion>
        </>
    );
};

export default TicketingRegister;
