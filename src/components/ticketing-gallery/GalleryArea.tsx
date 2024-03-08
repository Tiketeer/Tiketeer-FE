import { ticketing } from 'type/ticketing';
import TicketingBox from './TicketingBox';
import styled from '@emotion/styled';

export const Gallery = styled.div`
    display: flex;
    width: 100%;

    flex-wrap: wrap;
`;

const GalleryArea = (props: { ticketings: ticketing[] }) => {
    const { ticketings } = props;
    return (
        <Gallery>
            {ticketings.map(ticketing => {
                return <TicketingBox ticketing={ticketing}></TicketingBox>;
            })}
        </Gallery>
    );
};

export default GalleryArea;
