import EmailVerificationAndTicketQuantitySelector from 'components/email-verification-ticket-quantity/EmailVerificationAndTicketQuantitySelector';
import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';
import {
    Content,
    MainContent,
    PageWrapper,
    PaymentBackButton,
    PaymentIcon,
    PaymentMethodContainer,
    PaymentMethodTitle,
    Section,
    VerticalDivider,
} from 'components/payment/Payment';
import TicketDetail from 'components/payment/TicketDetail';
import { RightSection } from 'pages/payment/PaymentPage';
import { paymentEventDetail } from 'type/payment';

const OrderDetailPage = () => {
    const data: paymentEventDetail = {
        eventTime: 'September 22, 2021 · 20.00 - 21.56 WIB',
        location: 'Parkiran Utama Mall @ Alam Sutera',
        title: 'Drive In Senja: Back to the Future',
        price: 450000,
        numOfTicket: 2,
        imgUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d89337253b3e18f5903cf373d3443d390807ae6f16a8a45665b63c754f65e997?apiKey=c046a1fbbdc64c33bd7372e3519527dd&',
        ticketType: 'Gold Ticket',
    };

    return (
        <PageWrapper>
            <PageHeader />
            <MainContent>
                <PaymentBackButton>
                    <PaymentIcon
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a35c0c26b3644f999ce4bfe28e08e13d593adcb6a3b2d750da255581bc97d32e?apiKey=c046a1fbbdc64c33bd7372e3519527dd&"
                        alt="Payment Method Icon"
                    />
                </PaymentBackButton>
                <Section>
                    <PaymentMethodContainer>
                        <PaymentMethodTitle>Order Details</PaymentMethodTitle>
                    </PaymentMethodContainer>
                    <Content>
                        <EmailVerificationAndTicketQuantitySelector />
                        <VerticalDivider />
                        <RightSection>
                            <TicketDetail data={data} />
                        </RightSection>
                    </Content>
                </Section>
            </MainContent>
            <PageFooter />
        </PageWrapper>
    );
};

export default OrderDetailPage;
