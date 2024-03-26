import { Box, ThemeProvider, createTheme } from '@mui/material';
import { DatePicker, DateValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { COLOR } from 'color/color';
import { Dayjs } from 'dayjs';
import { useMemo, useState } from 'react';
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
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    setStartDate: React.Dispatch<React.SetStateAction<Dayjs>>;
    setEndDate: React.Dispatch<React.SetStateAction<Dayjs>>;
    inputRef: React.MutableRefObject<any>;
    setValidationValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputPeriod = ({
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    inputRef,
    setValidationValue,
}: InputDateProps) => {
    const [error, setError] = useState<DateValidationError | null>(null);

    const errorMessage = useMemo(() => {
        switch (error) {
            case 'maxDate': {
                return '시작 날짜는 종료 날짜 이전이여야 합니다';
            }
            case 'minDate': {
                return '종료 날짜는 시작 날짜 이후여야 합니다';
            }
        }
    }, [error]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ ...centerFlexStyle, gap: '10px' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="시작 날짜"
                        value={startDate}
                        onChange={newDate => {
                            if (newDate != null) {
                                setStartDate(newDate);
                            }
                        }}
                        onError={newError => {
                            setError(newError);
                            setValidationValue(false);
                        }}
                        slotProps={{
                            textField: {
                                helperText: errorMessage,
                            },
                        }}
                        maxDate={endDate}
                        ref={el => (inputRef.current[5] = el)}
                    />
                    <DatePicker
                        label="종료 날짜"
                        value={endDate}
                        onChange={newDate => {
                            if (newDate != null) {
                                setEndDate(newDate);
                            }
                        }}
                        slotProps={{
                            textField: {
                                helperText: errorMessage,
                            },
                        }}
                        minDate={startDate}
                    />
                </LocalizationProvider>
            </Box>
        </ThemeProvider>
    );
};

export default InputPeriod;
