import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { COLOR } from 'color/color';
import { CSSProperties } from 'react';
import ProfileButton from './ProfileButton';

const BaseContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const ProfileContainer = styled.div`
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

const ProfileImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const ProfileBtnContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
`;

const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 120px 10px;
    box-sizing: border-box;
    gap: 24px;
`;

const InfoElementContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    gap: 10px;
`;

const InfoElementTitleContainer = styled.div`
    width: 100%;
    height: 100%;
    font-size: 36px;
    font-weight: 500;
    font-family: Abhaya Libre;
`;

const InfoElementContentContainer = styled.div`
    width: 100%;
    height: 100%;
    font-size: 30px;
    font-weight: 300;
    font-family: Abhaya Libre;
`;

const InfoElement = (props: { title: string; content: string }) => {
    const { title, content } = props;
    return (
        <InfoElementContainer>
            <InfoElementTitleContainer>{title}</InfoElementTitleContainer>
            <InfoElementContentContainer>{content}</InfoElementContentContainer>
        </InfoElementContainer>
    );
};

const MyPageMainContent = () => {
    const profileStyle: CSSProperties = {
        width: 240,
        height: 240,
        color: COLOR.LIGHTER,
    };
    const email = 'Test@test.com';
    const dateOfRegister = '2024.03.05';
    const point = 100000;
    return (
        <BaseContainer>
            <ProfileContainer>
                <ProfileImgWrapper>
                    <AccountCircleIcon style={profileStyle} />
                </ProfileImgWrapper>
                <ProfileBtnContainer>
                    <ProfileButton title="Change Image" isFilled={true} />
                    <ProfileButton title="Delete Image" isFilled={false} />
                </ProfileBtnContainer>
            </ProfileContainer>
            <InfoContainer>
                <InfoElement title="Email" content={email} />
                <InfoElement title="Date of Registration" content={dateOfRegister} />
                <InfoElement title="Point" content={point.toLocaleString()} />
            </InfoContainer>
        </BaseContainer>
    );
};

export default MyPageMainContent;
