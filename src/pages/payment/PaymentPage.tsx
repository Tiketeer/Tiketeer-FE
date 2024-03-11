import styled from '@emotion/styled';
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
import PaymentButton from 'components/payment/PaymentBtn';
import PaymentMethod from 'components/payment/PaymentMethod';
import TicketDetail from 'components/payment/TicketDetail';
import { useState } from 'react';

export const RightSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 25vw;
`;

const PaymentPage = () => {
    const [selectedValue, setSelectedValue] = useState('card');

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
                        <PaymentMethodTitle>Payment Method</PaymentMethodTitle>
                    </PaymentMethodContainer>
                    <Content>
                        <PaymentMethod
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                        />
                        <VerticalDivider />
                        <RightSection>
                            <TicketDetail />
                            <PaymentButton text="Pay Now" />
                        </RightSection>
                    </Content>
                </Section>
            </MainContent>
            <PageFooter />
        </PageWrapper>
    );
};

export default PaymentPage;
