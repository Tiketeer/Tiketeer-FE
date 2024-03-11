import { Button, SxProps, Theme } from '@mui/material';
import { COLOR } from 'color/color';

const CommonButton = (props: {
    text: string;
    isFilled: boolean;
    callback?: () => Promise<void> | void;
}) => {
    const { text, isFilled, callback = async () => {} } = props;
    const buttonStyle: SxProps<Theme> = {
        height: '100%',
        width: '100%',
        backgroundColor: isFilled ? COLOR.DEFAULT : 'white',
        color: isFilled ? 'white' : COLOR.DEFAULT,
        fontSize: 'auto',
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
