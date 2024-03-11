import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import defaultImage from '../../../assets/image/login_bg.png';
import { PurchaseItemType } from './type';

const PurchaseRowContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    padding: 10px;
    box-sizing: border-box;
    gap: 10px;
    &:hover {
        border: 2px solid ${COLOR.LIGHTER};
        transition: 0.5s;
    }
`;

const ImgWrapperContainer = styled.img`
    width: 140px;
    height: 140px;
    object-fit: contain;
    display: block;
`;

const PurchaseRowContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 2px;
    padding-left: 10px;
`;

const PurchaseRowMetadataContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const PurchaseRowTitleContainer = styled.div`
    width: 100%;
    height: fit-content;
    font-family: Abhaya Libre;
    font-size: 24px;
    font-weight: bold;
`;

const PurchaseRowMetadataElementContainer = styled.div`
    width: 100%;
    height: fit-content;
    color: #979797;
    font-family: Abhaya Libre;
    font-size: 18px;
    font-weight: bold;
`;

const PurchaseRowPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 10px 0px;
    font-family: Abhaya Libre;
    font-size: 24px;
    font-weight: bold;
`;

const PurchaseRow = (props: { purchaseItem: PurchaseItemType }) => {
    const { purchaseItem } = props;
    const { title, date, ticketType, numOfTicket, cost, imgUrl = defaultImage } = purchaseItem;
    return (
        <PurchaseRowContainer
            onClick={() => {
                console.log(title + 'Click!');
            }}
        >
            <ImgWrapperContainer src={imgUrl} />
            <PurchaseRowContentContainer>
                <PurchaseRowMetadataContainer>
                    <PurchaseRowTitleContainer>{title}</PurchaseRowTitleContainer>
                    <PurchaseRowMetadataElementContainer>
                        {date}
                    </PurchaseRowMetadataElementContainer>
                    <PurchaseRowMetadataElementContainer>
                        {ticketType} x {numOfTicket}
                    </PurchaseRowMetadataElementContainer>
                </PurchaseRowMetadataContainer>
                <PurchaseRowPriceContainer>{cost.toLocaleString()}W</PurchaseRowPriceContainer>
            </PurchaseRowContentContainer>
        </PurchaseRowContainer>
    );
};

export default PurchaseRow;
