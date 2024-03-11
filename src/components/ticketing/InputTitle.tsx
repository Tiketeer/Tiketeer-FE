import { TextField } from '@mui/material';

import { useAccordionPreview } from './AccordionPreviewContext';
const InputTitle = () => {
    const { setPreview } = useAccordionPreview();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPreview(event.target.value);
    };

    return (
        <TextField
            sx={{ width: '100%' }}
            variant="standard"
            placeholder="제목을 입력하세요"
            onChange={handleInputChange}
        ></TextField>
    );
};

export default InputTitle;
