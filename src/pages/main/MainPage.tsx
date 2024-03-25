import styled from '@emotion/styled';
import axios from 'axios';
import ImagePanel from 'components/image-panel/ImagePanel';
import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';
import TicketingGallery from 'components/ticketing-gallery/TicketingGallery';
import { useEffect, useState } from 'react';
import { ApiResponseType } from 'type/response';
import { Ticketing } from 'type/ticketing';
import { getApiDomain } from 'util/domain';

export const MainContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
`;

const TicketingContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
`;

const Blank = styled.div`
    height: 100%;
`;

const MainPage = () => {
    const [ticketings, setTicketings] = useState<Ticketing[]>([]);
    const domain = getApiDomain();
    const path = '/api/ticketings';
    useEffect(() => {
        axios
            .get<ApiResponseType<Ticketing[]>>(domain + path)
            .then(({ data }) => {
                setTicketings(data.data);
            })
            .catch(err => {
                console.log(err);
                setTicketings([]);
            });
    }, []);

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
