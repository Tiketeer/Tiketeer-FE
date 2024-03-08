import styled from '@emotion/styled';

interface ticketing {
    imgUrl: string;
    eventTime: string;
    title: string;
    price: number;
    location: string;
}

export const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const EventTextArea = styled.div`
    font-size: 20px;
`;

export const GalleryArea = styled.div`
    display: flex;
`;

export const TicketingArea = styled.div``;

const TicketingGallery = (props: { ticketings: ticketing[] }) => {
    return (
        <GalleryContainer>
            <EventTextArea></EventTextArea>
            <GalleryArea></GalleryArea>
        </GalleryContainer>
    );
};

export default TicketingGallery;
