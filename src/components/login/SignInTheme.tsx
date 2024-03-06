import { createTheme } from '@mui/material';
import { COLOR } from '../../color/color';

export const SignInTheme = createTheme({
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
    },
});
