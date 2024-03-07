import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';
import {
    PageWrapper,
    MainContent,
    ConfirmationMessage,
    TicketImage,
    // TicketInfo,
    EmailAddress,
    // HelpSection,
    ResendButton,
    SupportContact,
    SupportIcon,
    HelpMessage,
    ResendMessage,
    ResendMessageContainer,
    SentToMessage,
    SupportEmail,
    ConfirmationMessageSection,
} from 'components/payment/PaymentConfirm';
import paymentConfirmImg from '../../assets/image/payment_confirm.png';

const PaymentConfirmPage = () => {
    return (
        <PageWrapper>
            <PageHeader isLogined={true} />
            <MainContent>
                <ConfirmationMessageSection>
                    <ConfirmationMessage>Completed!</ConfirmationMessage>
                </ConfirmationMessageSection>
                <TicketImage src={paymentConfirmImg} alt="Ticket Confirmation" />
                <SentToMessage>Tickets have been sent to</SentToMessage>
                <EmailAddress>rachelgreen@gmail.com</EmailAddress>
                <ResendMessageContainer>
                    <ResendMessage>Haven’t received tickets yet?</ResendMessage>
                    <ResendButton role="button">Resend Tickets</ResendButton>
                </ResendMessageContainer>
                <HelpMessage>Having trouble receiving the tickets?</HelpMessage>
                <SupportContact>
                    <SupportIcon
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d0246a61d4fe3f66b215fd7d912d40a736106c7befbb9d974f51887f045bbe5?apiKey=c046a1fbbdc64c33bd7372e3519527dd&"
                        alt="Support"
                    />
                    <SupportEmail>karcis@karcis.com</SupportEmail>
                </SupportContact>
            </MainContent>
            <PageFooter />
        </PageWrapper>
    );
};

export default PaymentConfirmPage;
