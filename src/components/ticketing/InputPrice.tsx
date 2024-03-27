import { TextField } from '@mui/material';
import React from 'react';

interface InputPriceProps {
    setPrice: React.Dispatch<React.SetStateAction<number>>;
    isValid: boolean;
    inputRef: React.MutableRefObject<any>;
}

const InputPrice = ({ setPrice, isValid, inputRef }: InputPriceProps) => {
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
            onFocus={e => e.persist()}
            error={!isValid}
            helperText={isValid ? null : '가격은 1원 이상이어야 합니다.'}
            ref={el => (inputRef.current[3] = el)}
        ></TextField>
    );
};

export default InputPrice;
