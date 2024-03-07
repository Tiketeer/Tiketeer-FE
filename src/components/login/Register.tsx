import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import { COLOR } from 'color/color';
import React from 'react';

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
    return (
        <RegisterContainer>
            <RegisterHeaderText>Create Account</RegisterHeaderText>
            <TextField id="outlined-basic" label="Email" variant="outlined" color="primary" />
            <TextField id="outlined-basic" label="Password" variant="outlined" color="primary" />
            <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                color="primary"
            />
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
            >
                REGISTER
            </Button>
        </RegisterContainer>
    );
}
