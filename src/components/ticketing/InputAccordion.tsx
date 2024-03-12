import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Typography } from '@mui/material';

export interface InputAccordionProps {
    tag: string;
    preview?: string | number;
    children?: React.ReactNode;
}

const InputAccordion = (props: InputAccordionProps) => {
    return (
        <Accordion defaultExpanded sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ width: '33%' }}>{props.tag}</Typography>
                <Typography
                    noWrap
                    sx={{
                        width: '500px',
                    }}
                >
                    {props.preview}
                </Typography>
            </AccordionSummary>
            {props.children}
        </Accordion>
    );
};

export default InputAccordion;
