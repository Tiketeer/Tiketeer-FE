import { Button, SxProps, Theme } from '@mui/material';

const DisabledButton = (props: { text: string; callback?: () => Promise<void> | void }) => {
    const { text, callback = async () => {} } = props;
    const buttonStyle: SxProps<Theme> = {
        height: '100%',
        width: '100%',
        backgroundColor: '#DADAFB',
        color: 'white',
        fontSize: 'auto',
        fontWeight: 'medium',
        fontFamily: 'General Sans',
        textTransform: 'none',
        ':hover': {
            cursor: 'default',
            backgroundColor: '#DADAFB',
        },
    };
    return (
        <Button variant="contained" sx={buttonStyle} onClick={callback}>
            {text}
        </Button>
    );
};

export default DisabledButton;
