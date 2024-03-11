import styled from '@emotion/styled';
import { ticketingDetail } from 'type/ticketing';
import { getDate, getMonth } from 'util/time';

const TicketingInfoBox = styled.div`
    display: grid;

    grid-template-columns: 1fr 6fr;

    padding: 50px 20px;

    height: 300px;

    border: 1px solid #ccc;

    margin: 10px 10px 0px 10px;
`;

const TicketingImageBox = styled.div`
    height: 100%;
`;

const TicketingImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    display: block;
`;

const TicketingDetail = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    align-items: flex-start;

    margin-left: 50px;
`;

const TicketingTitleAndDescription = styled.div``;

const TicketingTitle = styled.div`
    font-size: 35px;

    margin: 0px 20px 10px 0px;
`;

const TicketingDescription = styled.pre`
    font-size: 20px;

    margin: 0px 20px 10px 0px;
`;

const TicketingDateAndLocation = styled.div`
    display: flex;
    flex-direction: column;
`;

const TicketingEventTime = styled.div`
    margin: 0px 5px 10px 0px;
`;
const TicketingRunningTime = styled.div`
    margin: 0px 5px 10px 0px;
`;
const TicketingLocation = styled.div`
    margin: 0px 5px 10px 0px;
`;

const TicketingInfo = (props: { ticketing: ticketingDetail }) => {
    const { ticketing } = props;
    const date = new Date(ticketing.eventTime);
    const eventTime = [
        date.getFullYear(),
        getMonth(ticketing.eventTime),
        getDate(ticketing.eventTime),
    ].join('.');

    return (
        <TicketingInfoBox>
            <TicketingImageBox>
                <TicketingImage src={ticketing.imgUrl} alt="No image" />
            </TicketingImageBox>
            <TicketingDetail>
                <TicketingTitleAndDescription>
                    <TicketingTitle>{ticketing.title}</TicketingTitle>
                    <TicketingDescription>{ticketing.description}</TicketingDescription>
                </TicketingTitleAndDescription>
                <TicketingDateAndLocation>
                    <TicketingEventTime>공연기간 {eventTime}</TicketingEventTime>
                    <TicketingRunningTime>관람시간 {ticketing.runningTime}분</TicketingRunningTime>
                    <TicketingLocation>공연장 {ticketing.location}</TicketingLocation>
                </TicketingDateAndLocation>
            </TicketingDetail>
        </TicketingInfoBox>
    );
};

export default TicketingInfo;
