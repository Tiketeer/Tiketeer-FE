import styled from '@emotion/styled';
import React from 'react';
import inboxImage from '../../assets/image/inbox.png';
import { ContainedButton } from 'components/button/ButtonStyle';

const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Box = styled.div`
    width: 510px;
    height: 670px;
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
                    }}
                >
                    To start using Tiketeer, just click the below button
                </span>
                <ContainedButton style={{ margin: '20px', fontSize: 14 }} variant="contained">
                    Confirm your Email
                </ContainedButton>
            </Box>
        </CenteredContainer>
    );
}
