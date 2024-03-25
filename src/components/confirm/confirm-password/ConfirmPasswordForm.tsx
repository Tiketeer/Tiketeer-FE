import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { SetStateAction, useEffect } from 'react';
import { passwordRegex } from '../../../const/passwordRegex';

export const ConfirmPasswordFormContainer = styled.div`
    margin: 10px 0 40px 0;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 20%;
    gap: 20px;
`;

interface PasswordFieldsProps {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    confirmPassword: string;
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    confirmError: string;
    setConfirmError: React.Dispatch<React.SetStateAction<string>>;
}

const ConfirmPasswordForm = ({
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
    confirmError,
    setConfirmError,
}: PasswordFieldsProps) => {
    useEffect(() => {
        const patternError =
            'Password must be 8-16 characters long, include at least one letter, one number, and one special character.';
        if (!passwordRegex.test(password)) {
            setError(patternError);
        } else {
            setError('');
        }

        if (!passwordRegex.test(confirmPassword)) {
            setConfirmError(patternError);
        } else {
            setConfirmError('');
        }

        if (
            password &&
            confirmPassword &&
            passwordRegex.test(password) &&
            passwordRegex.test(confirmPassword) &&
            password !== confirmPassword
        ) {
            setConfirmError('Passwords do not match');
        }

        if (
            password &&
            confirmPassword &&
            passwordRegex.test(password) &&
            passwordRegex.test(confirmPassword) &&
            password === confirmPassword
        ) {
            if (setConfirmError) {
                setConfirmError('');
            }
        }
    }, [password, confirmPassword, setError, setConfirmError]);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        console.log(passwordRegex.test(newPassword));
    };

    const handleConfirmPasswordChange = (event: { target: { value: SetStateAction<string> } }) => {
        setConfirmPassword(event.target.value);
    };

    return (
        <ConfirmPasswordFormContainer>
            <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                color="primary"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                error={!!error}
                helperText={error}
            />
            <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={!!confirmError}
                helperText={confirmError}
            />
        </ConfirmPasswordFormContainer>
    );
};

export default ConfirmPasswordForm;
