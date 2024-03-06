import styled from '@emotion/styled';
import React from 'react';

const DividerContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 20px 0;
`;

const DividerLine = styled.div`
    flex-grow: 1;
    height: 1px;
    background-color: #d1d5db; // Use your desired color for the line
`;

const DividerText = styled.div`
    padding: 0 10px;
`;

export default function Divider() {
    return (
        <DividerContainer>
            <DividerLine />
            <DividerText>Or Continue with</DividerText>
            <DividerLine />
        </DividerContainer>
    );
}
