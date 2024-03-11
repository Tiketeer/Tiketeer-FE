import { useAccordionPreview } from './AccordionPreviewContext';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { centerFlexStyle } from '../../styles/align';
import { COLOR } from 'color/color';

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

const InputDate = () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

    const { setPreview } = useAccordionPreview();

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ ...centerFlexStyle }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={value}
                        onChange={newValue => {
                            setValue(newValue);
                            setPreview(newValue ? newValue.format('YYYY-MM-DD') : '');
                        }}
                    />
                </LocalizationProvider>
            </Box>
        </ThemeProvider>
    );
};

export default InputDate;
