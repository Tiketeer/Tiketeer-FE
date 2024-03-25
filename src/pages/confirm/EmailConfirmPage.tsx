import styled from '@emotion/styled';
import axios from 'axios';
import { ContainedButton } from 'components/button/ButtonStyle';
import { passwordRegex } from 'const/passwordRegex';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import inboxImage from '../../assets/image/inbox.png';
import ConfirmPasswordForm from '../../components/confirm/confirm-password/ConfirmPasswordForm';
const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Box = styled.div`
    width: 510px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InboxImage = styled.div`
    width: 340px;
    height: 380px;
    background-image: url(${inboxImage});
`;

export default function EmailConfirmPage() {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const otp = searchParams.get('otp');

        if (
            !password ||
            !confirmPassword ||
            !passwordRegex.test(password) ||
            !passwordRegex.test(confirmPassword) ||
            password !== confirmPassword
        ) {
            return;
        }

        axios
            .post('/api/members/password', {
                otp: otp,
                newPassword: password,
            })
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                console.error(err);
            });
    };
    return (
        <CenteredContainer>
            <Box>
                <InboxImage />
                <h1 style={{ margin: '10px' }}>Hi! David</h1>
                <h2 style={{ margin: '0px', opacity: '85%', fontWeight: '500' }}>
                    Welcome to Tiketeer
                </h2>
                <span
                    style={{
                        margin: '15px',
                        opacity: '80%',
                        fontWeight: '500',
                        color: '#3F3E3E',
                        fontSize: '15',
                        textAlign: 'center',
                    }}
                >
                    To start using Tiketeer, just set your password and click the button below
                </span>
                <ConfirmPasswordForm
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    error={error}
                    setError={setError}
                    confirmError={confirmError}
                    setConfirmError={setConfirmError}
                />
                <ContainedButton
                    style={{ margin: '20px', fontSize: 14 }}
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Confirm your Email
                </ContainedButton>
            </Box>
        </CenteredContainer>
    );
}
