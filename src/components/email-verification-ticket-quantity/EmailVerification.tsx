import styled from '@emotion/styled';

export const EmailVerificationContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const EmailAddressContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin: 10px;
`;

export const EmailAddressText = styled.div`
    height: 100px;
    font-size: 25px;
`;

export const EmailAddressBox = styled.div`
    height: 100px;
    border: 1px solid black;
    border-radius: 5px;

    padding: 10px 5px;
`;

const EmailVerification = () => {
    return (
        <EmailVerificationContainer>
            <EmailAddressContainer>
                <EmailAddressText>Email Address</EmailAddressText>
                <EmailAddressBox>rachelgree@gmail.com</EmailAddressBox>
            </EmailAddressContainer>
            <EmailAddressContainer>
                <EmailAddressText>Confirm Email Address</EmailAddressText>
                <EmailAddressBox></EmailAddressBox>
            </EmailAddressContainer>
        </EmailVerificationContainer>
    );
};

export default EmailVerification;
