import styled from '@emotion/styled';
import { Ticketing } from 'type/ticketing';
import TicketingBox from './TicketingBox';

export const Gallery = styled.div`
    display: flex;
    width: 100%;

    flex-wrap: wrap;
`;

const GalleryArea = (props: { ticketings: Ticketing[] }) => {
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
