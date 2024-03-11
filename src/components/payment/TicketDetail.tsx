import styled from '@emotion/styled';
import dashedLine from '../../assets/image/dashed_line.png';
import SectionTitle from './SectionTitle';

export const DetailsSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 25vw;
`;

export const EventDetails = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 34px;
`;

export const HorizontalDivider = styled.div`
    background-image: url(${dashedLine});
    min-height: 1px;
    margin-top: 25px;
    width: 100%;
`;

export const OrderSummary = styled.section`
    display: flex;
    flex-direction: column;
`;

export const EventImage = styled.img`
    width: 163px;
    aspect-ratio: 2.13;
    border: 0;
`;

export const EventContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const EventName = styled.h3`
    font-size: 16px;
    color: #000;
`;

export const Location = styled.div`
    display: flex;
    gap: 8px;
`;

export const DateTime = styled.div`
    display: flex;
    gap: 8px;
`;

export const LocationIcon = styled.img`
    width: 18px;
    aspect-ratio: 1;
`;

export const DateTimeIcon = LocationIcon;

export const LocationDetails = styled.span``;
export const DateTimeDetails = styled.span``;

export const SummaryTitle = styled.div`
    font:
        20px 'General Sans',
        sans-serif;
    font-weight: 500;
    padding-top: 10px;
`;
export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
`;

export const ItemTitle = styled.div`
    font:
        16px 'General Sans',
        sans-serif;
`;
export const ItemDetails = styled.div`
    font:
        16px 'General Sans',
        sans-serif;
    font-weight: 500;
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    font-weight: 500;
`;

export const TotalTitle = styled.div``;
export const TotalAmount = styled.div``;

const TicketDetail = () => {
    return (
        <DetailsSection>
            <SectionTitle title="Event Details" />
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
                        <LocationDetails>Parkiran Utama Mall @ Alam Sutera</LocationDetails>
                    </Location>
                    <DateTime>
                        <DateTimeIcon
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9770ebdd381bc593576af35f34c7ea8b286183e7a341c12d0e86482922545d?apiKey=c046a1fbbdc64c33bd7372e3519527dd&"
                            alt="Date Time Icon"
                        />
                        <DateTimeDetails>September 22, 2021 · 20.00 - 21.56 WIB</DateTimeDetails>
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
            </OrderSummary>
        </DetailsSection>
    );
};

export default TicketDetail;
