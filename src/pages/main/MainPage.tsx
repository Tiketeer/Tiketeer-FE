import styled from '@emotion/styled';
import ImagePanel from 'components/image-panel/ImagePanel';
import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';
import TicketingGallery from 'components/ticketing-gallery/TicketingGallery';
import { ticketing } from 'type/ticketing';

export const MainContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    flex-wrap: wrap;
`;

const TicketingContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
`;

const Blank = styled.div`
    height: 100%;
`;

const MainPage = () => {
    const ticketings: ticketing[] = [
        {
            eventTime: '2024-04-01 12:00:00',
            location: 'The Icon, BSD',
            title: 'Panic! at the Disco',
            price: 450000,
            imgUrl: 'logo192.png',
        },
        {
            eventTime: '2024-11-02 13:00:00',
            location: 'Ciputra Artpreneur',
            title: 'Hamilton the Musical',
            price: 1500000,
            imgUrl: 'logo192.png',
        },
        {
            eventTime: '2024-11-21 13:00:00',
            location: 'Ciputra Artpreneur',
            title: 'Hamilton the Musical',
            price: 1500000,
            imgUrl: 'logo192.png',
        },
        {
            eventTime: '2024-11-02 13:00:00',
            location: 'Ciputra Artpreneur',
            title: 'Hamilton the Musical',
            price: 1500000,
            imgUrl: 'logo192.png',
        },
        {
            eventTime: '2024-11-02 13:00:00',
            location: 'Ciputra Artpreneur',
            title: 'Hamilton the Musical',
            price: 1500000,
            imgUrl: 'logo192.png',
        },
        {
            eventTime: '2024-11-02 13:00:00',
            location: 'Ciputra Artpreneur',
            title: 'Hamilton the Musical',
            price: 1500000,
            imgUrl: 'logo192.png',
        },
        {
            eventTime: '2024-11-02 13:00:00',
            location: 'Ciputra Artpreneur',
            title: 'Hamilton the Musical',
            price: 1500000,
            imgUrl: 'logo192.png',
        },
    ];
    return (
        <MainContainer>
            <PageHeader isLogined={false} />
            <ImagePanel />
            <TicketingContainer>
                <Blank></Blank>
                <TicketingGallery ticketings={ticketings} />
                <Blank></Blank>
            </TicketingContainer>
            <PageFooter />
        </MainContainer>
    );
};

export default MainPage;
