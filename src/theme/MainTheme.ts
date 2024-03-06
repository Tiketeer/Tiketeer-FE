import { createTheme } from '@mui/material/styles';
import { COLOR } from '../color/color';
export const MainTheme = createTheme({
    palette: {
        primary: {
            main: COLOR.DEFAULT,
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& fieldset': {
                        borderColor: COLOR.DEFAULT,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: COLOR.DEFAULT,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: COLOR.DEFAULT,
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: COLOR.DEFAULT,
                    '&.Mui-focused': {
                        color: COLOR.DEFAULT,
                    },
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: COLOR.DEFAULT,
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: COLOR.DEFAULT,
                },
            },
        },
    },
});
