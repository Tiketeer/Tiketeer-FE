import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { isLoginedState } from 'atoms/atom';
import { COLOR } from 'color/color';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LOGIN_STATE } from 'type/login';
import AuthButton from './AuthButton';

const PageHeaderAuthBtnSetContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: end;
    padding: 2.5vh 0px;
    box-sizing: border-box;
    gap: 2vw;
`;

const ProfileStyle: CSSProperties = {
    height: 40,
    width: 40,
    color: COLOR.LIGHTER,
};

const PageHeaderAuthBtnSet = () => {
    const navigate = useNavigate();

    const [isLogined, setIsLogined] = useRecoilState(isLoginedState);

    const onClickLogout = async () => {
        window.location.reload();
        setIsLogined({ isLogined: false, role: '' });
        localStorage.removeItem(LOGIN_STATE);
    };

    return (
        <PageHeaderAuthBtnSetContainer>
            {isLogined.isLogined ? (
                <>
                    <div
                        onClick={() => {
                            navigate('/mypage');
                        }}
                    >
                        <AccountCircleIcon style={ProfileStyle}></AccountCircleIcon>
                    </div>
                    <AuthButton text="Logout" isFilled={true} callback={onClickLogout} />
                </>
            ) : (
                <>
                    <AuthButton
                        text="Register"
                        isFilled={true}
                        callback={async () => {
                            navigate('/login');
                        }}
                    />
                    <AuthButton
                        text="Login"
                        isFilled={false}
                        callback={async () => {
                            navigate('/login');
                        }}
                    />
                </>
            )}
        </PageHeaderAuthBtnSetContainer>
    );
};

export default PageHeaderAuthBtnSet;
