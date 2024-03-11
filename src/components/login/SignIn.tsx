import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { ContainedButton } from '../button/ButtonStyle';

export const SignInHeaderText = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    padding: 20px 0;
    font-family: Inter;
`;

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 20px;
`;

export const ForgotPasswordText = styled.div`
    font-size: 0.9rem;
    opacity: 0.5;
    text-align: right;
`;

export default function SignIn() {
    return (
        <SignInContainer>
            <SignInHeaderText>Sign In</SignInHeaderText>
            <TextField id="outlined-basic" label="Email" variant="outlined" color="primary" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <ForgotPasswordText>Recover Password?</ForgotPasswordText>
            <ContainedButton
                variant="contained"
                sx={{
                    height: 48,
                    boxShadow: '0 18px 30px rgba(68, 97, 242, 0.11)',
                }}
            >
                Sign In
            </ContainedButton>
        </SignInContainer>
    );
}
