import { TextField } from '@mui/material';

interface InputTitleProps {
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const InputTitle = ({ setTitle }: InputTitleProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
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
