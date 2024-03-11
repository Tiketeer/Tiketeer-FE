import InputTitle from './InputTitle';
import InputDescription from './InputDescription';
import { AccordionDetails } from '@mui/material';
import InputAccordion from './InputAccordion';
import InputDate from './InputDate';
const TicketingRegister = () => {
    return (
        <>
            <InputAccordion tag="제목">
                <AccordionDetails>
                    <InputTitle />
                </AccordionDetails>
            </InputAccordion>

            <InputAccordion tag="설명">
                <AccordionDetails>
                    <InputDescription />
                </AccordionDetails>
            </InputAccordion>

            <InputAccordion tag="날짜">
                <AccordionDetails>
                    <InputDate />
                </AccordionDetails>
            </InputAccordion>
        </>
    );
};

export default TicketingRegister;
