import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { COLOR } from 'color/color';
import { CSSProperties } from 'react';
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

const PageHeaderAuthBtnSet = (props: { isLogined: boolean }) => {
    const { isLogined } = props;
    return (
        <PageHeaderAuthBtnSetContainer>
            {isLogined ? (
                <>
                    <AccountCircleIcon style={ProfileStyle}></AccountCircleIcon>
                    <AuthButton text="Logout" isFilled={true} />
                </>
            ) : (
                <>
                    <AuthButton text="Register" isFilled={true} />
                    <AuthButton text="Login" isFilled={false} />
                </>
            )}
        </PageHeaderAuthBtnSetContainer>
    );
};

export default PageHeaderAuthBtnSet;
