import { Box, ThemeProvider, createTheme } from '@mui/material';
import { TimePicker, TimeValidationError } from '@mui/x-date-pickers';
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
    startTime: Dayjs | null;
    endTime: Dayjs | null;
    setStartTime: React.Dispatch<React.SetStateAction<Dayjs>>;
    setEndTime: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const InputDate = ({ startTime, setStartTime, endTime, setEndTime }: InputDateProps) => {
    const [error, setError] = useState<TimeValidationError | null>(null);

    const errorMessage = useMemo(() => {
        switch (error) {
            case 'maxTime': {
                return '시작시간은 종료시간 이전이여야 합니다';
            }
            case 'minTime': {
                return '종료시간은 시작시간 이후여야 합니다';
            }
        }
    }, [error]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ ...centerFlexStyle, gap: '10px' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        label="시작시간"
                        value={startTime}
                        onChange={newDate => {
                            if (newDate != null) {
                                setStartTime(newDate);
                            }
                        }}
                        onError={newError => setError(newError)}
                        slotProps={{
                            textField: {
                                helperText: errorMessage,
                            },
                        }}
                        maxTime={endTime}
                    />
                    <TimePicker
                        label="종료시간"
                        value={endTime}
                        onChange={newDate => {
                            if (newDate != null) {
                                setEndTime(newDate);
                            }
                        }}
                        slotProps={{
                            textField: {
                                helperText: errorMessage,
                            },
                        }}
                        minTime={startTime}
                    />
                </LocalizationProvider>
            </Box>
        </ThemeProvider>
    );
};

export default InputDate;
