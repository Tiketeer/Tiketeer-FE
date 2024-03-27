import { TextField } from '@mui/material';

interface InputQuantityProps {
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    isValid: boolean;
    inputRef: React.MutableRefObject<any>;
}

const InputQuantity = ({ setQuantity, isValid, inputRef }: InputQuantityProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setQuantity(newValue === '' ? 0 : parseInt(event.target.value));
    };

    return (
        <TextField
            type="number"
            sx={{ width: '100%' }}
            variant="standard"
            placeholder="수량을 입력하세요"
            onChange={handleInputChange}
            onFocus={e => e.persist()}
            error={!isValid}
            helperText={isValid ? null : '수량은 1 이상이어야 합니다.'}
            ref={el => (inputRef.current[4] = el)}
        ></TextField>
    );
};

export default InputQuantity;
