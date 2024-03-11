import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import CommonButton from 'components/button/CommonButton';
import DisabledButton from 'components/button/DisabledButton';
import { useState } from 'react';
import EmailVerification from './EmailVerification';
import TicketQuantitySelector from './TicketQuantitySelector';

export const EmailVerificationAndTicketQuantitySelectorContainer = styled.div`
    display: flex;

    flex-direction: column;

    justify-content: space-between;

    margin-right: 20px;
`;

export const InfoTextBox = styled.div`
    background-color: #f0effe;
    color: ${COLOR.DEFAULT};

    border-radius: 5px;
    display: flex;
    align-items: center;

    padding: 10px 60px;
    margin: 50px 0px;

    min-height: 70px;
    font-size: 22px;

    flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 3.5fr 1fr;

    min-height: 55px;
`;

const Blank = styled.div`
    min-height: 35px;
`;

const EmailVerificationAndTicketQuantitySelector = () => {
    const [isConfirm, setConfirm] = useState(false);

    return (
        <EmailVerificationAndTicketQuantitySelectorContainer>
            <InfoTextBox>
                E-tickets will be sent to your email address, please make sure your email address is
                correct.
            </InfoTextBox>
            <EmailVerification setConfirm={setConfirm} />
            <TicketQuantitySelector />
            <ButtonContainer>
                <Blank></Blank>
                {isConfirm ? (
                    <CommonButton text="Continue to Payment" isFilled={true} />
                ) : (
                    <DisabledButton text="Continue to Payment" />
                )}
            </ButtonContainer>
        </EmailVerificationAndTicketQuantitySelectorContainer>
    );
};

export default EmailVerificationAndTicketQuantitySelector;
