import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AuthButton from './AuthButton';
import { CSSProperties } from 'react';
import { COLOR } from 'color/color';

const btnSetPadding = 25;

const PageHeaderAuthBtnSetContainer = styled.div`
    width: 216px;
    height: ${100 - 2 * btnSetPadding}%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    padding: ${btnSetPadding}% 0%;
    gap: 35px;
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
                    <AuthButton text="Logout" isFilled={true} />
                    <AccountCircleIcon style={ProfileStyle}></AccountCircleIcon>
                </>
            ) : (
                <>
                    <AuthButton text="Login" isFilled={false} />
                    <AuthButton text="Register" isFilled={true} />
                </>
            )}
        </PageHeaderAuthBtnSetContainer>
    );
};

export default PageHeaderAuthBtnSet;
