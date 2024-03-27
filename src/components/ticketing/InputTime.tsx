import { Box, ThemeProvider, createTheme } from '@mui/material';
import { TimePicker, TimeValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { COLOR } from 'color/color';
import { Dayjs } from 'dayjs';
import React, { useMemo, useState } from 'react';
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
    inputRef: React.MutableRefObject<any>;
    setValidationValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputTime = ({
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    inputRef,
    setValidationValue,
}: InputDateProps) => {
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
                        onError={newError => {
                            setError(newError);
                            setValidationValue(newError ? false : true);
                        }}
                        slotProps={{
                            textField: {
                                helperText: errorMessage,
                            },
                        }}
                        maxTime={endTime}
                        ref={el => (inputRef.current[1] = el)}
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

export default InputTime;
