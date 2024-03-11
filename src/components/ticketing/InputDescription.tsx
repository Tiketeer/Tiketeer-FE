import { TextField } from '@mui/material';

interface InputDescriptionProps {
    setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const InputDescription = ({ setDescription }: InputDescriptionProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    return (
        <TextField
            sx={{ width: '100%' }}
            variant="standard"
            placeholder="제목을 입력하세요"
            multiline
            onChange={handleInputChange}
        ></TextField>
    );
};

export default InputDescription;
