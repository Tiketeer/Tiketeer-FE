import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

export const EmailVerificationContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const EmailAddressContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0px 20px 10px 0px;
`;

export const EmailAddressText = styled.div`
    height: 30px;
    font-size: 25px;

    margin: 20px 0px;
`;

export const EmailAddressBox = styled.div`
    min-height: 30px;
    border: 1px solid black;
    border-radius: 5px;

    padding: 10px 5px;

    display: flex;
    align-items: center;
`;

export const ConfirmEmailAddressBox = styled.input`
    min-height: 30px;
    border: 1px solid black;
    border-radius: 5px;

    padding: 10px 5px;
    font-size: 16px;
`;

const EmailVerification = (props: {
    setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const { setConfirm } = props;

    const email = 'rachelgree@gmail.com';

    const [confirmEmail, setConfirmEmail] = useState('');
    const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
        setConfirmEmail(e.target.value);
    };

    useEffect(() => {
        if (confirmEmail === email) {
            setConfirm(true);
        } else {
            setConfirm(false);
        }
    }, [confirmEmail]);

    return (
        <EmailVerificationContainer>
            <EmailAddressContainer>
                <EmailAddressText>Email Address</EmailAddressText>
                <EmailAddressBox>{email}</EmailAddressBox>
            </EmailAddressContainer>
            <EmailAddressContainer>
                <EmailAddressText>Confirm Email Address</EmailAddressText>
                <ConfirmEmailAddressBox type="email" onChange={onChangeInput} />
            </EmailAddressContainer>
        </EmailVerificationContainer>
    );
};

export default EmailVerification;
