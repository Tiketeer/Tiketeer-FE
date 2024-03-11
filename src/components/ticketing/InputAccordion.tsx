import { Typography } from '@mui/material';
import { Accordion, AccordionSummary } from '@mui/material';
import { AccordionPreviewContext } from './AccordionPreviewContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export interface InputAccordionProps {
    tag: string;
    children?: React.ReactNode;
}

const InputAccordion = (props: InputAccordionProps) => {
    const [preview, setPreview] = useState('');

    return (
        <AccordionPreviewContext.Provider value={{ setPreview }}>
            <Accordion defaultExpanded sx={{ width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ width: '33%' }}>{props.tag}</Typography>
                    <Typography
                        noWrap
                        sx={{
                            width: '500px',
                        }}
                    >
                        {preview}
                    </Typography>
                </AccordionSummary>
                {props.children}
            </Accordion>
        </AccordionPreviewContext.Provider>
    );
};

export default InputAccordion;
