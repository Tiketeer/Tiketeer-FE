import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLOR } from '../../color/color';

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 20px;
`;

export const RegisterHeaderText = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    padding: 20px 0;
    font-family: Inter;
`;

export default function Register() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = e => {
        setEmail(e.target.value);
    };

    const submit = async () => {
        axios
            .post('/api/members/register', {
                email,
                // TODO seler button
                isSeller: true,
            })
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <RegisterContainer>
            <RegisterHeaderText>Create Account</RegisterHeaderText>
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="primary"
                onChange={onChangeEmail}
            />
            {email === '' ? (
                <Button
                    variant="contained"
                    sx={{
                        height: 48,
                        boxShadow: '0 18px 30px rgba(68, 97, 242, 0.11)',
                        backgroundColor: COLOR.LIGHTER,
                        ':hover': {
                            backgroundColor: COLOR.DEFAULT,
                        },
                    }}
                    disabled
                >
                    REGISTER
                </Button>
            ) : (
                <Button
                    variant="contained"
                    sx={{
                        height: 48,
                        boxShadow: '0 18px 30px rgba(68, 97, 242, 0.11)',
                        backgroundColor: COLOR.DARKER,
                    }}
                    onClick={submit}
                >
                    REGISTER
                </Button>
            )}
        </RegisterContainer>
    );
}
