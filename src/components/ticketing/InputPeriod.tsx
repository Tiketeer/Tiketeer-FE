import { Box, ThemeProvider, createTheme } from '@mui/material';
import { DateTimePicker, DateTimeValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { COLOR } from 'color/color';
import dayjs, { Dayjs } from 'dayjs';
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
    eventTime: dayjs.Dayjs;
}

const InputPeriod = ({
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    inputRef,
    setValidationValue,
    eventTime,
}: InputDateProps) => {
    const [error, setError] = useState<
        DateTimeValidationError | 'invalidTime' | 'shouldBeforeEventTime'
    >(null);

    const errorMessage = useMemo(() => {
        switch (error) {
            case 'invalidDate': {
                return '시작 날짜는 오늘 날짜 이후여야 합니다';
            }
            case 'invalidTime': {
                return '시작 시간은 현재로부터 최소 1시간 이후에 가능합니다';
            }
            case 'maxDate': {
                return '시작 날짜는 종료 날짜 이전이여야 합니다';
            }
            case 'minDate': {
                return '종료 날짜는 시작 날짜 이후여야 합니다';
            }
            case 'maxTime':
            case 'minTime': {
                return '시작 시간과 종료 시간은 최소 1시간 이상 차이나야 합니다';
            }
            case 'shouldBeforeEventTime': {
                return '종료 시간은 이벤트 시작 시간 이전이어야 합니다';
            }
        }
    }, [error]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ ...centerFlexStyle, gap: '10px' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="시작 날짜"
                        value={startDate}
                        onChange={newDate => {
                            if (newDate != null) {
                                setStartDate(newDate);
                            }
                        }}
                        onError={newError => {
                            console.log(newError);
                            setError(
                                newError === 'minDate'
                                    ? 'invalidDate'
                                    : newError === 'minTime'
                                      ? 'invalidTime'
                                      : newError,
                            );
                            setValidationValue(newError ? false : true);
                        }}
                        slotProps={{
                            textField: {
                                helperText: errorMessage,
                            },
                        }}
                        minDateTime={dayjs().add(1, 'h')}
                        maxDateTime={endDate?.subtract(1, 'h')}
                        ref={el => (inputRef.current[5] = el)}
                    />
                    <DateTimePicker
                        label="종료 날짜"
                        value={endDate}
                        onChange={newDate => {
                            if (newDate != null) {
                                setEndDate(newDate);
                            }
                        }}
                        onError={newError => {
                            if (newError === 'maxDate' || newError === 'maxTime') {
                                setError('shouldBeforeEventTime');
                            }
                            setValidationValue(newError ? false : true);
                        }}
                        slotProps={{
                            textField: {
                                helperText: errorMessage,
                            },
                        }}
                        minDateTime={startDate?.add(1, 'h')}
                        maxDateTime={eventTime}
                    />
                </LocalizationProvider>
            </Box>
        </ThemeProvider>
    );
};

export default InputPeriod;
