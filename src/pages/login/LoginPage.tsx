import EntryForm from 'components/login/EntryForm';
import {
    CenteredText,
    CenteredTextWrapper,
    EntryFormContainer,
    LeftHalf,
    RightHalf,
    SplitScreenContainer,
} from './LoginPageStyle';

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
                </EntryFormContainer>
            </RightHalf>
        </SplitScreenContainer>
    );
};

export default LoginPage;
