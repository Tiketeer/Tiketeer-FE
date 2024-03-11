import styled from '@emotion/styled';
import SaleRow from './SaleRow';
import { SalesItemType } from './type';

const SalesContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const SalesContentTitleContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px;
    box-sizing: border-box;
    font-family: Abhaya Libre;
    font-size: 36px;
    font-weight: bold;
`;

const SalesContentListContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    gap: 20px;
`;

const MyPageSalesContent = () => {
    const mockTotalTicket = 5000;
    const salesItemList: SalesItemType[] = [3201, 102, 3, 1405, 4500].map(restTicket => {
        return {
            title: '워터밤 서울 2024 (WATERBOMB SEOUL 2024)',
            ticketType: 'Paket VIP',
            saleStartDate: '2024.06.01',
            SaleEndDate: '2024.06.15',
            ticketPrice: 371000,
            totalTickets: mockTotalTicket,
            restTickets: restTicket,
        };
    });
    return (
        <SalesContentContainer>
            <SalesContentTitleContainer>Sales Tickets</SalesContentTitleContainer>
            <SalesContentListContainer>
                {salesItemList.map(item => {
                    return <SaleRow saleItem={item} />;
                })}
            </SalesContentListContainer>
        </SalesContentContainer>
    );
};

export default MyPageSalesContent;
