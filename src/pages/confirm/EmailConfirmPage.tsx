import styled from '@emotion/styled';
import React from 'react';
import inboxImage from '../../assets/image/inbox.png';

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
            </Box>
        </CenteredContainer>
    );
}
