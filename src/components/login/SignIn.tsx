import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { isLoginedState } from 'atoms/atom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogined, setIsLogined] = useRecoilState(isLoginedState);
    const navigate = useNavigate();

    const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = e => {
        setEmail(e.target.value);
    };

    const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = e => {
        setPassword(e.target.value);
    };

    const submit = async () => {
        axios
            .post('/api/auth/login', {
                email,
                password,
            })
            .then(() => {
                setIsLogined(true);
                navigate(-1);
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <SignInContainer>
            <SignInHeaderText>Sign In</SignInHeaderText>
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="primary"
                onChange={onChangeEmail}
            />
            <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={onChangePassword}
                type="password"
            />
            <ForgotPasswordText>Recover Password?</ForgotPasswordText>
            <ContainedButton
                variant="contained"
                sx={{
                    height: 48,
                    boxShadow: '0 18px 30px rgba(68, 97, 242, 0.11)',
                }}
                onClick={submit}
            >
                Sign In
            </ContainedButton>
        </SignInContainer>
    );
}
