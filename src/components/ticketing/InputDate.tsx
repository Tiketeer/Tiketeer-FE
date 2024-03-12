import { Box, ThemeProvider, createTheme } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { COLOR } from 'color/color';
import { Dayjs } from 'dayjs';
import { centerFlexStyle } from '../../styles/align';

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: COLOR.DEFAULT,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: COLOR.DEFAULT,
                    },
                },
            },
        },
    },
});

interface InputDateProps {
    date: Dayjs | null;
    setDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const InputDate = ({ date, setDate }: InputDateProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ ...centerFlexStyle }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={date}
                        onChange={newDate => {
                            if (newDate != null) {
                                setDate(newDate);
                            }
                        }}
                    />
                </LocalizationProvider>
            </Box>
        </ThemeProvider>
    );
};

export default InputDate;
