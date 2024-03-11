import { TextField } from '@mui/material';
import React from 'react';

interface InputPriceProps {
    setPrice: React.Dispatch<React.SetStateAction<number>>;
}

const InputPrice = ({ setPrice }: InputPriceProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPrice(newValue === '' ? 0 : parseInt(event.target.value));
    };

    return (
        <TextField
            type="number"
            sx={{ width: '100%' }}
            variant="standard"
            placeholder="가격을 입력하세요"
            onChange={handleInputChange}
        ></TextField>
    );
};

export default InputPrice;
