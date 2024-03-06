import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const SignInHeaderText = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    padding: 20px;
    font-family: Inter;
`;

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ForgotPasswordText = styled.div`
    font-size: 0.9rem;
    opacity: 0.5;
`;

export default function SignIn() {
    return (
        <SignInContainer>
            <SignInHeaderText>Sign In</SignInHeaderText>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
            <Button variant="contained">Sign In</Button>
        </SignInContainer>
    );
}
