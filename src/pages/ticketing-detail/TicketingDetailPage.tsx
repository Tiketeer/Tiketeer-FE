import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import CancelButton from 'components/button/CancelButton';
import CommonButton from 'components/button/CommonButton';
import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';
import TicketingInfo from 'components/ticketing-info/TicketingInfo';
import TicketingOpenInfo from 'components/ticketing-open-info/TicketingOpenInfo';
import TicketingReserve from 'components/ticketing-reserve/TicketingReserve';
import { ticketingDetail } from 'type/ticketing';

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
    const info: ticketingDetail = {
        eventTime: '2024-04-01 12:00:00',
        location: 'The Icon, BSD',
        title: 'Panic! at the Disco',
        price: 450000,
        imgUrl: 'https://img.danawa.com/prod_img/500000/137/107/img/19107137_1.jpg?shrink=330:*&_v=20230222135917',
        description: `익사이팅한 음악과 퍼포먼스 그리고 워터파이팅이 더해진 새로운 차원의 경험 !
놓칠 수 없는 최고의 워터 뮤직 페스티벌 워터밤 서울 2024`,
        runningTime: 540,
    };

    const date = new Date(info.eventTime);
    const isOpen = date.getTime() <= Date.now();
    const isSeller = true;

    return (
        <TicketingDetailContainer>
            <PageHeader isLogined={false} />
            <TicketingBodyContainer>
                <Blank />
                <TicketingBodyBox>
                    <TicketingInfo ticketing={info} />
                    {isOpen ? <TicketingReserve /> : <TicketingOpenInfo />}
                    {isSeller ? (
                        <ButtonContainer>
                            <ButtonBox>
                                <CommonButton text="수정" isFilled={true}></CommonButton>
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
