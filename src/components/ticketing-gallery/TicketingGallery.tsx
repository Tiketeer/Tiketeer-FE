import styled from '@emotion/styled';
import { Ticketing } from 'type/ticketing';
import GalleryArea from './GalleryArea';

export const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 100px 20px;
`;
export const EventTextArea = styled.div`
    font-size: 20px;
    margin-bottom: 25px;
`;

export const TicketingArea = styled.div``;

const TicketingGallery = (props: { ticketings: Ticketing[] }) => {
    const { ticketings } = props;
    return (
        <GalleryContainer>
            <EventTextArea>Event</EventTextArea>
            <GalleryArea ticketings={ticketings}></GalleryArea>
        </GalleryContainer>
    );
};

export default TicketingGallery;
