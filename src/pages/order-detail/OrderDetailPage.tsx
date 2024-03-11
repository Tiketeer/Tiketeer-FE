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

const OrderDetailPage = () => {
    return (
        <PageWrapper>
            <PageHeader isLogined={true} />
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
                            <TicketDetail />
                            {/* <PaymentButtonContainer>
                                <CommonButton
                                    text="Pay Now"
                                    isFilled={true}
                                    callback={() => {
                                        alert('paying!');
                                    }}
                                />
                            </PaymentButtonContainer> */}
                        </RightSection>
                    </Content>
                </Section>
            </MainContent>
            <PageFooter />
        </PageWrapper>
    );
};

export default OrderDetailPage;
