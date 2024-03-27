import { TextField } from '@mui/material';

interface InputTitleProps {
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    isValid: boolean;
    inputRef: React.MutableRefObject<any>;
}

const InputTitle = ({ setTitle, isValid, inputRef }: InputTitleProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    return (
        <TextField
            sx={{ width: '100%' }}
            variant="standard"
            placeholder="제목을 입력하세요"
            onChange={handleInputChange}
            onFocus={e => e.persist()}
            error={!isValid}
            helperText={isValid ? null : '제목이 비어있습니다.'}
            ref={el => (inputRef.current[0] = el)}
        ></TextField>
    );
};

export default InputTitle;
