import { TextField } from '@mui/material';

interface InputQuantityProps {
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const InputQuantity = ({ setQuantity }: InputQuantityProps) => {
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
        ></TextField>
    );
};

export default InputQuantity;
