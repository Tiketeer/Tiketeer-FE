import styled from '@emotion/styled';
import { paymentEventDetail } from 'type/payment';
import dashedLine from '../../assets/image/dashed_line.png';
import SectionTitle from './SectionTitle';

const DetailsSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 25vw;
    min-width: 490px;
`;

const EventDetails = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 34px;
`;

const HorizontalDivider = styled.div`
    background-image: url(${dashedLine});
    min-height: 1px;
    margin-top: 25px;
    width: 100%;
`;

const OrderSummary = styled.section`
    display: flex;
    flex-direction: column;
`;

const EventImage = styled.img`
    width: 163px;
    aspect-ratio: 2.13;
    border: 0;
`;

const EventContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const EventName = styled.h3`
    font-size: 16px;
    color: #000;
`;

const Location = styled.div`
    display: flex;
    gap: 8px;
`;

const DateTime = styled.div`
    display: flex;
    gap: 8px;
`;

const LocationIcon = styled.img`
    width: 18px;
    aspect-ratio: 1;
`;

const DateTimeIcon = LocationIcon;

const LocationDetails = styled.span``;
const DateTimeDetails = styled.span``;

const SummaryTitle = styled.div`
    font:
        20px 'General Sans',
        sans-serif;
    font-weight: 500;
    padding-top: 10px;
`;
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
`;

const ItemTitle = styled.div`
    font:
        16px 'General Sans',
        sans-serif;
`;
const ItemDetails = styled.div`
    font:
        16px 'General Sans',
        sans-serif;
    font-weight: 500;
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    font-weight: 500;
`;

const TotalTitle = styled.div``;
const TotalAmount = styled.div``;

const TicketDetail = (props: { data: paymentEventDetail }) => {
    const { data } = props;

    return (
        <DetailsSection>
            <SectionTitle title="Event Details" />
            <EventDetails>
                <EventImage loading="lazy" src={data.imgUrl} alt="Event" />
                <EventContent>
                    <EventName>{data.title}</EventName>
                    <Location>
                        <LocationIcon
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5369b277fb31a19cff9339a96369df64930c298a206e326487c3408f45fd1618?apiKey=c046a1fbbdc64c33bd7372e3519527dd&"
                            alt="Location Icon"
                        />
                        <LocationDetails>{data.location}</LocationDetails>
                    </Location>
                    <DateTime>
                        <DateTimeIcon
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9770ebdd381bc593576af35f34c7ea8b286183e7a341c12d0e86482922545d?apiKey=c046a1fbbdc64c33bd7372e3519527dd&"
                            alt="Date Time Icon"
                        />
                        <DateTimeDetails>{data.eventTime}</DateTimeDetails>
                    </DateTime>
                </EventContent>
            </EventDetails>
            <HorizontalDivider />
            <OrderSummary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <Item>
                    <ItemTitle>Ticket Type</ItemTitle>
                    <ItemDetails>
                        {data.numOfTicket} x {data.ticketType}
                    </ItemDetails>
                </Item>
                <HorizontalDivider />
                <Item>
                    <ItemTitle>Ticket Price</ItemTitle>
                    <ItemDetails>
                        {data.numOfTicket} x {data.price}₩
                    </ItemDetails>
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
                    <TotalAmount>{data.numOfTicket * data.price}₩</TotalAmount>
                </Total>
            </OrderSummary>
        </DetailsSection>
    );
};

export default TicketDetail;
