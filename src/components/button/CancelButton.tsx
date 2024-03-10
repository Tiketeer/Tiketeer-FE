import { Button, SxProps, Theme } from '@mui/material';
import { COLOR } from 'color/color';

const CancelButton = (props: {
    text: string;
    backgroundColor?: string;
    callback?: () => Promise<void> | void;
}) => {
    const { text, backgroundColor = COLOR.ALERT, callback = async () => {} } = props;
    const buttonStyle: SxProps<Theme> = {
        height: '100%',
        width: '100%',
        backgroundColor,
        color: 'white',
        fontSize: 'auto',
        fontWeight: 'medium',
        fontFamily: 'General Sans',
        textTransform: 'none',
        ':hover': {
            backgroundColor: '#E67F7F',
        },
    };
    return (
        <Button variant="contained" sx={buttonStyle} onClick={callback}>
            {text}
        </Button>
    );
};

export default CancelButton;
