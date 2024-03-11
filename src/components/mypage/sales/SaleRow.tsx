import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import ProgressBar from './ProgressBar';
import { SalesItemType } from './type';

const SaleRowContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    gap: 10px;
    &:hover {
        border: 2px solid ${COLOR.LIGHTER};
        transition: 0.5s;
    }
`;

const SaleRowTitleContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px;
    font-family: Abhaya Libre;
    font-size: 24px;
    font-weight: bold;
`;

const TicketTypeContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0px 20px;
    color: #979797;
    font-family: Abhaya Libre;
    font-size: 18px;
    font-weight: bold;
`;

const SaleRowBottomContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
    box-sizing: border-box;
`;

const SaleRowBottonElementContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0px 10px;
    box-sizing: border-box;
`;

const SaleRowBottomHeaderContainer = styled.div`
    width: 100%;
    height: fit-content;
    color: #979797;
    font-family: Abhaya Libre;
    font-size: 18px;
    font-weight: bold;
`;

const SaleRowPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    color: black;
`;

const SaleRowProgressBarWrapperContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const SaleRowProgressInfoContainer = styled.div`
    width: 100%;
    height: fit-content;
    color: black;
`;

const SaleRow = (props: { saleItem: SalesItemType }) => {
    const {
        saleItem: {
            title,
            ticketPrice,
            ticketType,
            saleStartDate,
            SaleEndDate,
            totalTickets,
            restTickets,
        },
    } = props;
    const progressRate = Math.floor(((totalTickets - restTickets) / totalTickets) * 100);
    return (
        <SaleRowContainer
            onClick={() => {
                console.log(title + 'Click!');
            }}
        >
            <SaleRowTitleContainer>{title}</SaleRowTitleContainer>
            <TicketTypeContainer>{ticketType}</TicketTypeContainer>
            <SaleRowBottomContainer>
                <SaleRowBottonElementContainer>
                    <SaleRowBottomHeaderContainer>
                        Sale Period: {saleStartDate} ~ {SaleEndDate}
                    </SaleRowBottomHeaderContainer>
                    <SaleRowPriceContainer>{ticketPrice.toLocaleString()}W</SaleRowPriceContainer>
                </SaleRowBottonElementContainer>
                <SaleRowBottonElementContainer>
                    <SaleRowBottomHeaderContainer>Sold-out Rate</SaleRowBottomHeaderContainer>
                    <SaleRowProgressBarWrapperContainer>
                        <SaleRowProgressInfoContainer>
                            {totalTickets - restTickets} / {totalTickets} ({progressRate}%)
                        </SaleRowProgressInfoContainer>
                        <ProgressBar rate={progressRate} />
                    </SaleRowProgressBarWrapperContainer>
                </SaleRowBottonElementContainer>
            </SaleRowBottomContainer>
        </SaleRowContainer>
    );
};

export default SaleRow;
