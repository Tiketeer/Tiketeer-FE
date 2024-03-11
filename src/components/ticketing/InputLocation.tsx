import { TextField } from '@mui/material';
import React from 'react';

interface InputLocationProps {
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const InputLocation = ({ setLocation }: InputLocationProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    return (
        <TextField
            sx={{ width: '100%' }}
            variant="standard"
            placeholder="장소를 입력하세요"
            onChange={handleInputChange}
        ></TextField>
    );
};

export default InputLocation;
