import { Button, SxProps, Theme } from '@mui/material';
import { COLOR } from 'color/color';

const CancelButton = (props: {
    text: string;
    isFilled?: boolean;
    backgroundColor?: string;
    isDisabled?: boolean;
    callback?: () => Promise<void> | void;
}) => {
    const {
        text,
        isFilled = true,
        backgroundColor = COLOR.ALERT,
        isDisabled = false,
        callback = async () => {},
    } = props;
    const buttonStyle: SxProps<Theme> = {
        height: '100%',
        width: '100%',
        border: 1,
        borderColor: backgroundColor,
        backgroundColor: isFilled ? backgroundColor : 'white',
        color: isFilled ? 'white' : backgroundColor,
        fontSize: 'auto',
        fontWeight: 'medium',
        fontFamily: 'General Sans',
        textTransform: 'none',
        ':hover': {
            backgroundColor: isFilled ? COLOR.ALERT_DARKER : COLOR.ALERT_LIGHTER,
        },
    };
    return (
        <Button variant="contained" sx={buttonStyle} onClick={callback} disabled={isDisabled}>
            {text}
        </Button>
    );
};

export default CancelButton;
