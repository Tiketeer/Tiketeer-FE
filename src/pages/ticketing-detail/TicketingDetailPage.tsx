import styled from '@emotion/styled';
import axios from 'axios';
import CancelButton from 'components/button/CancelButton';
import CommonButton from 'components/button/CommonButton';
import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';
import TicketingInfo from 'components/ticketing-info/TicketingInfo';
import TicketingOpenInfo from 'components/ticketing-open-info/TicketingOpenInfo';
import TicketingReserve from 'components/ticketing-reserve/TicketingReserve';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_STATE } from 'type/login';
import { ApiResponseType } from 'type/response';
import { TicketingDetail } from 'type/ticketing';

export const TicketingDetailContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
`;

const TicketingBodyContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
`;

const Blank = styled.div`
    height: 100%;
`;

const TicketingBodyBox = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
`;

const ButtonBox = styled.div`
    width: 250px;
    min-height: 50px;
    margin: 10px;
`;

const TicketingDetailPage = () => {
    const navigate = useNavigate();
    const [ticketingInfo, setTicketingInfo] = useState<TicketingDetail>({
        ticketingId: '',
        title: '',
        location: '',
        eventTime: '',
        saleStart: '',
        saleEnd: '',
        remainedStock: 0,
        createdAt: '',
        category: '',
        runningMinutes: 0,
        price: 0,
        description: '',
    });

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSeller, setIsSeller] = useState<boolean>(false);

    const location = useLocation();
    useEffect(() => {
        axios.get<ApiResponseType<TicketingDetail>>(`/api${location.pathname}`).then(({ data }) => {
            setTicketingInfo({
                ...data.data,
            });

            const date = new Date(data.data.saleStart);
            setIsOpen(date.getTime() <= Date.now());
            const role = localStorage.getItem(LOGIN_STATE);
            if (role) {
                setIsSeller(role === 'SELLER');
            }
        });
    }, []);

    return (
        <TicketingDetailContainer>
            <PageHeader />
            <TicketingBodyContainer>
                <Blank />
                <TicketingBodyBox>
                    <TicketingInfo ticketing={ticketingInfo} />
                    {isOpen ? (
                        <TicketingReserve ticketing={ticketingInfo} />
                    ) : (
                        <TicketingOpenInfo />
                    )}
                    {!isOpen && isSeller ? (
                        <ButtonContainer>
                            <ButtonBox>
                                <CommonButton
                                    text="수정"
                                    isFilled={true}
                                    callback={() => {
                                        navigate(`${location.pathname}/edit`);
                                    }}
                                ></CommonButton>
                            </ButtonBox>
                            <ButtonBox>
                                <CancelButton text="삭제"></CancelButton>
                            </ButtonBox>
                        </ButtonContainer>
                    ) : (
                        <div></div>
                    )}
                </TicketingBodyBox>
                <Blank />
            </TicketingBodyContainer>
            <PageFooter />
        </TicketingDetailContainer>
    );
};

export default TicketingDetailPage;
