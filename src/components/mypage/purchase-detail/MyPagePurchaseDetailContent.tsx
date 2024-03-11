import styled from '@emotion/styled';
import CommonButton from 'components/button/CommonButton';
import TicketDetail from 'components/payment/TicketDetail';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { paymentEventDetail } from 'type/payment';

const PurchaseDetailContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const PurchaseDetailContentTitleContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px;
    box-sizing: border-box;
    font-family: Abhaya Libre;
    font-size: 36px;
    font-weight: bold;
`;

const PurcahseDetailContentTicketContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 25px;
    width: 25vw;
    min-width: 490px;
`;

const PurchaseDetailContentTicketButtonContainer = styled.div`
    width: 355px;
    height: 53px;
    gap: 25px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;

const MyPagePurchaseDetailContent = () => {
    const { params: purchaseId } = useParams();
    console.log(purchaseId);
    const data: paymentEventDetail = {
        eventTime: 'September 22, 2021 · 20.00 - 21.56 WIB',
        location: 'Parkiran Utama Mall @ Alam Sutera',
        title: 'Drive In Senja: Back to the Future',
        price: 450000,
        numOfTicket: 2,
        imgUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d89337253b3e18f5903cf373d3443d390807ae6f16a8a45665b63c754f65e997?apiKey=c046a1fbbdc64c33bd7372e3519527dd&',
        ticketType: 'Gold Ticket',
    };

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };

    return (
        <PurchaseDetailContentContainer>
            <PurchaseDetailContentTitleContainer>
                Purchasing Detail
            </PurchaseDetailContentTitleContainer>
            <PurcahseDetailContentTicketContainer>
                <TicketDetail data={data} />
                <PurchaseDetailContentTicketButtonContainer>
                    <CommonButton
                        text="확인"
                        isFilled={true}
                        size="16px"
                        callback={() => {
                            navigate(-1);
                        }}
                    />
                    <CommonButton text="예매 취소" isFilled={false} size="16px" callback={open} />
                </PurchaseDetailContentTicketButtonContainer>
            </PurcahseDetailContentTicketContainer>
        </PurchaseDetailContentContainer>
    );
};

export default MyPagePurchaseDetailContent;
