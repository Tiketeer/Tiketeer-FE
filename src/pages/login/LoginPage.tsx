import EntryForm from 'components/login/EntryForm';
import {
    CenteredText,
    CenteredTextWrapper,
    EntryFormContainer,
    LeftHalf,
    RightHalf,
    SplitScreenContainer,
} from './LoginPageStyle';
import { Divider } from '@mui/material';
import SocialLoginButtons from '../../components/login/SocialLoginButtons';

const LoginPage = () => {
    return (
        <SplitScreenContainer>
            <LeftHalf>
                <CenteredTextWrapper>
                    <CenteredText>Tiketeer</CenteredText>
                    <CenteredText>Ticketing made easy.</CenteredText>
                </CenteredTextWrapper>
            </LeftHalf>
            <RightHalf>
                <EntryFormContainer>
                    <EntryForm />
                    <Divider style={{ width: '100%', opacity: 0.5 }}>Or Continue with</Divider>
                    <SocialLoginButtons />
                </EntryFormContainer>
            </RightHalf>
        </SplitScreenContainer>
    );
};

export default LoginPage;
