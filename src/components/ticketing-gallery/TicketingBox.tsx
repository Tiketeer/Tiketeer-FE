import styled from '@emotion/styled';
import { ticketing } from 'type/ticketing';
import { getDate, getMonthAbbreviation } from 'util/time';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Ticketing = styled.div`
    display: flex;
    flex-direction: column;

    width: 300px;
    height: 290px;

    border: 1px solid #ccc;
    border-radius: 5px;

    margin: 10px 10px;
`;

export const ImageBox = styled.div`
    height: 65%;
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
`;

export const TicketingInfoBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;

    padding-top: 10px;
`;
export const TicketingDate = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;
export const TicketingDateBody = styled.div``;

export const TicketingDetail = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
`;

export const TicketingTitle = styled.div`
    padding: 3px 7px;
`;
export const TicketingPrice = styled.div`
    padding: 3px 7px;
`;
export const TicketingLocation = styled.div`
    display: flex;
    padding: 3px 7px;
`;

export const TicketingLocationBody = styled.div``;

const TicketingBox = (props: { ticketing: ticketing }) => {
    const { ticketing } = props;
    const month = getMonthAbbreviation(ticketing.eventTime);
    const date = getDate(ticketing.eventTime);

    return (
        <Ticketing>
            <ImageBox>
                <Image src={ticketing.imgUrl} alt="No Iamge" />
            </ImageBox>
            <TicketingInfoBox>
                <TicketingDate>
                    <TicketingDateBody>{month}</TicketingDateBody>
                    <TicketingDateBody>{date}</TicketingDateBody>
                </TicketingDate>
                <TicketingDetail>
                    <TicketingTitle>{ticketing.title}</TicketingTitle>
                    <TicketingPrice>{ticketing.price.toLocaleString('ko-kr')}원</TicketingPrice>
                    <TicketingLocation>
                        <LocationOnIcon></LocationOnIcon>
                        <TicketingLocationBody>{ticketing.location}</TicketingLocationBody>
                    </TicketingLocation>
                </TicketingDetail>
            </TicketingInfoBox>
        </Ticketing>
    );
};

export default TicketingBox;
