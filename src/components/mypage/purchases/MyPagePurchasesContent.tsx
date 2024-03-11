import styled from '@emotion/styled';
import PurchaseRow from './PurchaseRow';
import { PurchaseItemType } from './type';

const PurchasesContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const PurchasesContentTitleContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px;
    box-sizing: border-box;
    font-family: Abhaya Libre;
    font-size: 36px;
    font-weight: bold;
`;

const PurchasesContentListContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    gap: 20px;
`;

const MyPagePurchasesContent = () => {
    const purchaseItemList: PurchaseItemType[] = [1, 2, 3, 4, 5].map(day => {
        return {
            title: '워터밤 서울 2024 (WATERBOMB SEOUL 2024))',
            eventTime: `2024.07.${day.toString().padStart(2, '0')} 13:00`,
            ticketType: 'Paket VIP',
            numOfTicket: 2,
            price: 742000,
            purchaseId: 'abcd1234',
        };
    });
    return (
        <PurchasesContentContainer>
            <PurchasesContentTitleContainer>Purchasing Tickets</PurchasesContentTitleContainer>
            <PurchasesContentListContainer>
                {purchaseItemList.map(item => {
                    return <PurchaseRow purchaseItem={item} />;
                })}
            </PurchasesContentListContainer>
        </PurchasesContentContainer>
    );
};

export default MyPagePurchasesContent;
