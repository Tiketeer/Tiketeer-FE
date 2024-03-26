import { Box, ThemeProvider, createTheme } from '@mui/material';
import { DatePicker, DateValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { COLOR } from 'color/color';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
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

const InputEventDate = ({ date, setDate }: InputDateProps) => {
    const [error, setError] = useState<DateValidationError>(null);

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
                        onError={newError => setError(newError)}
                        slotProps={{
                            textField: {
                                helperText: error ? '이벤트 날짜는 오늘 이후여야 합니다' : null,
                            },
                        }}
                        minDate={dayjs().add(1, 'day')}
                    />
                </LocalizationProvider>
            </Box>
        </ThemeProvider>
    );
};

export default InputEventDate;
