import { Button, SxProps, Theme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PathToButtonKey } from './constant';
import { MyPagePathType } from '../constant';

const SideBarElementButton = (props: { text: string; isSelected?: boolean }) => {
    const navigate = useNavigate();
    const { text, isSelected = false } = props;
    const buttonStyle: SxProps<Theme> = {
        height: '100%',
        justifyContent: 'start',
        alignContent: 'start',
        color: isSelected ? 'black' : '#979797',
        textTransform: 'none',
    };

    const newMyPagePath = (Object.keys(PathToButtonKey).find(
        path => PathToButtonKey[path as MyPagePathType] === text,
    ) ?? '/') as MyPagePathType;
    return (
        <Button
            sx={buttonStyle}
            onClick={() => {
                navigate('/mypage' + newMyPagePath);
            }}
        >
            {text}
        </Button>
    );
};

export default SideBarElementButton;
