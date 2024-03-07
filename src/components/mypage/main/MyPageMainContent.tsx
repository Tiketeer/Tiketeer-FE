import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { COLOR } from 'color/color';
import { CSSProperties } from 'react';
import ProfileButton from './ProfileButton';

const MyPageMainContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const MyPageMainProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 96px 33px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const MyPageMainProfileImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const MyPageMainProfileBtnContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
`;

const MyPageMainInfoContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const MyPageMainContent = () => {
    const profileStyle: CSSProperties = {
        width: 240,
        height: 240,
        color: COLOR.LIGHTER,
    };
    return (
        <MyPageMainContentContainer>
            <MyPageMainProfileContainer>
                <MyPageMainProfileImgWrapper>
                    <AccountCircleIcon style={profileStyle} />
                </MyPageMainProfileImgWrapper>
                <MyPageMainProfileBtnContainer>
                    <ProfileButton title="Change Image" isFilled={true} />
                    <ProfileButton title="Delete Image" isFilled={false} />
                </MyPageMainProfileBtnContainer>
            </MyPageMainProfileContainer>
            <MyPageMainInfoContainer></MyPageMainInfoContainer>
        </MyPageMainContentContainer>
    );
};

export default MyPageMainContent;
