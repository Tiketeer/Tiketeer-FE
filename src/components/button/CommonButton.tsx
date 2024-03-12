import { Button, SxProps, Theme } from '@mui/material';
import { COLOR } from 'color/color';

const CommonButton = (props: {
    text: string;
    isFilled: boolean;
    size?: string;
    callback?: () => Promise<void> | void;
}) => {
    const { text, isFilled, size, callback = async () => {} } = props;
    const buttonStyle: SxProps<Theme> = {
        height: '100%',
        width: '100%',
        border: 1,
        borderColor: COLOR.DEFAULT,
        backgroundColor: isFilled ? COLOR.DEFAULT : 'white',
        color: isFilled ? 'white' : COLOR.DEFAULT,
        fontSize: size ?? 'auto',
        fontWeight: 'medium',
        fontFamily: 'General Sans',
        textTransform: 'none',
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

export default CommonButton;
