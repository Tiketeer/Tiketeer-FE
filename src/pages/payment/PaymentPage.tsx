import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';
import {
    Section,
    PaymentMethodContainer,
    PaymentBackButton,
    PaymentIcon,
    PaymentMethodTitle,
    Content,
    PaymentSection,
    SectionTitle,
    Option,
    OptionDetails,
    OptionLabel,
    OptionHighlight,
    VerticalDivider,
    DetailsSection,
    EventDetails,
    EventImage,
    EventContent,
    EventName,
    Location,
    LocationIcon,
    LocationDetails,
    DateTime,
    DateTimeIcon,
    DateTimeDetails,
    HorizontalDivider,
    OrderSummary,
    SummaryTitle,
    Item,
    ItemTitle,
    ItemDetails,
    Total,
    TotalTitle,
    TotalAmount,
    PaymentButton,
    PageWrapper,
    MainContent,
} from 'components/payment/Payment';
import Radio from '@mui/material/Radio';
import React, { useState } from 'react';

const PaymentPage = () => {
    const [selectedValue, setSelectedValue] = useState('card');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

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
                        <PaymentSection>
                            <SectionTitle>Payment Method</SectionTitle>
                            <Option>
                                <OptionDetails>
                                    <Radio
                                        checked={selectedValue === 'point'}
                                        onChange={handleChange}
                                        value="point"
                                        name="radio-buttons"
                                    />
                                    <OptionLabel>Point</OptionLabel>
                                </OptionDetails>
                            </Option>
                            <OptionHighlight>
                                <OptionDetails>
                                    <Radio
                                        checked={selectedValue === 'card'}
                                        onChange={handleChange}
                                        value="card"
                                        name="radio-buttons"
                                    />
                                    <OptionLabel style={{ color: '#4f4cee' }}>
                                        Credit/Debit Card
                                    </OptionLabel>
                                </OptionDetails>
                            </OptionHighlight>
                        </PaymentSection>
                        <VerticalDivider />
                        <DetailsSection>
                            <SectionTitle>Event Details</SectionTitle>
                            <EventDetails>
                                <EventImage
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d89337253b3e18f5903cf373d3443d390807ae6f16a8a45665b63c754f65e997?apiKey=c046a1fbbdc64c33bd7372e3519527dd&"
                                    alt="Event"
                                />
                                <EventContent>
                                    <EventName>Drive In Senja: Back to the Future</EventName>
                                    <Location>
                                        <LocationIcon
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5369b277fb31a19cff9339a96369df64930c298a206e326487c3408f45fd1618?apiKey=c046a1fbbdc64c33bd7372e3519527dd&"
                                            alt="Location Icon"
                                        />
                                        <LocationDetails>
                                            Parkiran Utama Mall @ Alam Sutera
                                        </LocationDetails>
                                    </Location>
                                    <DateTime>
                                        <DateTimeIcon
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9770ebdd381bc593576af35f34c7ea8b286183e7a341c12d0e86482922545d?apiKey=c046a1fbbdc64c33bd7372e3519527dd&"
                                            alt="Date Time Icon"
                                        />
                                        <DateTimeDetails>
                                            September 22, 2021 · 20.00 - 21.56 WIB
                                        </DateTimeDetails>
                                    </DateTime>
                                </EventContent>
                            </EventDetails>
                            <HorizontalDivider />
                            <OrderSummary>
                                <SummaryTitle>Order Summary</SummaryTitle>
                                <Item>
                                    <ItemTitle>Ticket Type</ItemTitle>
                                    <ItemDetails>2 x Gold Ticket</ItemDetails>
                                </Item>
                                <HorizontalDivider />
                                <Item>
                                    <ItemTitle>Ticket Price</ItemTitle>
                                    <ItemDetails>2 x 371,000₩</ItemDetails>
                                </Item>
                                <Item>
                                    <ItemTitle>Service & Handling</ItemTitle>
                                    <ItemDetails>-</ItemDetails>
                                </Item>
                                <Item>
                                    <ItemTitle>Admin Fee</ItemTitle>
                                    <ItemDetails>-</ItemDetails>
                                </Item>
                                <HorizontalDivider />
                                <Total>
                                    <TotalTitle>Total</TotalTitle>
                                    <TotalAmount>742,000₩</TotalAmount>
                                </Total>
                                <PaymentButton>Pay Now</PaymentButton>
                            </OrderSummary>
                        </DetailsSection>
                    </Content>
                </Section>
            </MainContent>
            <PageFooter />
        </PageWrapper>
    );
};

export default PaymentPage;
