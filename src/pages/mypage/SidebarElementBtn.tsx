import { Button, SxProps, Theme } from '@mui/material';

const SideBarElementButton = (props: {
    text: string;
    isSelected?: boolean;
    callback?: () => Promise<void>;
}) => {
    const { text, isSelected = false, callback = async () => {} } = props;
    const buttonStyle: SxProps<Theme> = {
        height: '100%',
        justifyContent: 'start',
        alignContent: 'start',
        color: isSelected ? 'black' : '#979797',
        textTransform: 'none',
    };
    return (
        <Button sx={buttonStyle} onClick={callback}>
            {text}
        </Button>
    );
};

export default SideBarElementButton;
