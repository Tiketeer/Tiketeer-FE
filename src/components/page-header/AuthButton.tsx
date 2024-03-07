import { Button, SxProps, Theme } from '@mui/material';
import { COLOR } from 'color/color';

const AuthButton = (props: {
    text?: string;
    isFilled?: boolean;
    callback?: () => Promise<void>;
}) => {
    const { text = '', isFilled = true, callback = async () => {} } = props;
    const buttonStyle: SxProps<Theme> = {
        height: '100%',
        width: '96px',
        backgroundColor: isFilled ? COLOR.DEFAULT : 'white',
        color: isFilled ? 'white' : COLOR.DEFAULT,
        fontSize: 14,
        fontWeight: 'medium',
        fontFamily: 'General Sans',
        ':hover': {
            backgroundColor: isFilled ? COLOR.DARKER : COLOR.LIGHTER,
        },
    };
    return (
        <Button variant="contained" sx={buttonStyle} onClick={callback}>
            {text}
        </Button>
    );
};

export default AuthButton;
