import { TextField } from '@mui/material';
import React from 'react';

interface InputLocationProps {
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    isValid: boolean;
    inputRef: React.MutableRefObject<any>;
}

const InputLocation = ({ setLocation, isValid, inputRef }: InputLocationProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    return (
        <TextField
            sx={{ width: '100%' }}
            variant="standard"
            placeholder="장소를 입력하세요"
            onChange={handleInputChange}
            onFocus={e => e.persist()}
            error={!isValid}
            helperText={isValid ? null : '장소가 비어있습니다.'}
            ref={el => (inputRef.current[2] = el)}
        ></TextField>
    );
};

export default InputLocation;
