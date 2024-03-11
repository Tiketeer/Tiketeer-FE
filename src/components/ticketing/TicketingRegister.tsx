import InputTitle from './InputTitle';
import InputDescription from './InputDescription';
import { AccordionDetails } from '@mui/material';
import InputAccordion from './InputAccordion';
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
        </>
    );
};

export default TicketingRegister;
