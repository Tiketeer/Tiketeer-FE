import { Button, SxProps, Theme } from '@mui/material';
import { COLOR } from 'color/color';

const ProfileButton = (props: {
    title: string;
    isFilled: boolean;
    callback?: () => Promise<void>;
}) => {
    const { title, isFilled, callback = async () => {} } = props;
    const buttonStyle: SxProps<Theme> = {
        width: 132,
        height: 39,
        backgroundColor: isFilled ? COLOR.DEFAULT : 'white',
        color: isFilled ? 'white' : COLOR.DEFAULT,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Abhaya Libre',
        textTransform: 'none',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: isFilled ? 'white' : COLOR.LIGHTER,
            color: isFilled ? COLOR.DEFAULT : 'white',
            transition: '0.5s',
        },
    };
    return (
        <Button variant="contained" sx={buttonStyle} onClick={callback}>
            {title}
        </Button>
    );
};

export default ProfileButton;
