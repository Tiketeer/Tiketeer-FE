import React from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import AppleIcon from '../../assets/icons/AppleIcon';
import XIcon from '../../assets/icons/XIcon';
import GoogleIcon from '../../assets/icons/GoogleIcon';
import FacebookIcon from '../../assets/icons/FacebookIcon';

const SocialButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`;

const SocialButton = styled(Button)`
    padding: 10px;
    min-width: 50px;
    border: 1px solid #e0e0e9;
    border-radius: 15%;
    box-shadow: 0 18px 30px rgba(68, 97, 242, 0.11);
    &:hover {
        border-color: #d7d7de;
    }
`;

function SocialLoginButtons() {
    return (
        <SocialButtonsContainer>
            <SocialButton variant="outlined">
                <GoogleIcon />
            </SocialButton>
            <SocialButton variant="outlined">
                <XIcon />
            </SocialButton>
            <SocialButton variant="outlined">
                <FacebookIcon />
            </SocialButton>
            <SocialButton variant="outlined">
                <AppleIcon />
            </SocialButton>
        </SocialButtonsContainer>
    );
}

export default SocialLoginButtons;
