import styled from '@emotion/styled';

export const PageWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MainContent = styled.main`
    padding: 10px 0px 20px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ConfirmationMessageSection = styled.section`
    display: flex;
    max-width: 426px;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    color: var(--Brand-Primary-Default, #4f4cee);
    font-weight: 500;
    white-space: nowrap;
`;
export const ConfirmationMessage = styled.div`
    justify-content: center;
    border-radius: 4px;
    box-shadow: 6px 8px 0px 0px #0022ba;
    border: 2px solid rgba(79, 76, 238, 1);
    background-color: var(--White, #fff);
    margin-top: 60px;
    padding: 15px 40px;
    font:
        700 48px/1 'Cabinet Grotesk',
        sans-serif;
    color: rgba(79, 76, 238, 1);

    @media (max-width: 991px) {
        font-size: 40px;
        margin-top: 40px;
        white-space: initial;
        padding: 0 20px;
    }
`;

export const TicketImage = styled.img`
    width: 100%;
    max-width: 426px;
    margin-top: 20px;
`;

export const SentToMessage = styled.p`
    color: #000;
    margin-top: 39px;
    font:
        24px 'General Sans',
        sans-serif;
    font-weight: 500;
`;

export const EmailAddress = styled.p`
    margin-top: 0px;
    font:
        20px 'General Sans',
        sans-serif;
    color: rgba(79, 76, 238, 1);
    font-weight: 500;
`;

export const ResendMessageContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ResendMessage = styled.p`
    color: #000;
    font-family: 'General Sans', sans-serif;
    font-weight: 500;
`;

export const ResendButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid rgba(79, 76, 238, 1);
    background-color: #fff;
    margin-top: 11px;
    padding: 10px 16px;
    font-family: 'General Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: rgba(79, 76, 238, 1);
    cursor: pointer;

    @media (max-width: 991px) {
        white-space: initial;
    }
`;

export const HelpMessage = styled.p`
    color: #000;
    font-family: 'General Sans', sans-serif;
    margin-top: 104px;
    font-weight: 500;
`;

export const SupportContact = styled.div`
    display: flex;
    /* margin-top: 6px; */
    /* gap: 10px; */
    padding: 5px 0px;
`;

export const SupportIcon = styled.img`
    aspect-ratio: 1;
    width: 18px;
`;

export const SupportEmail = styled.p`
    flex-grow: 1;
    font-family: 'General Sans', sans-serif;
    color: rgba(79, 76, 238, 1);
    font-weight: 500;
`;
