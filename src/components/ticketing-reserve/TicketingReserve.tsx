import styled from '@emotion/styled';
import { COLOR } from 'color/color';

const TicketingReserveContainer = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid #ccc;

    margin: 10px;
`;

const TicketingReserveTextBox = styled.div`
    display: grid;

    grid-template-columns: 1fr 2fr;
`;

const DateBox = styled.div`
    min-height: 60px;
    font-size: 21px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const TimeBox = styled.div`
    min-height: 60px;
    font-size: 21px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ReserveButtonContainer = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;

    min-height: 180px;

    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
`;

const DateButtonContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 10px 50px;
    background: #f9f9f9;

    border-right: 1px solid #ccc;
`;

const DateButton = styled.div`
    border: 1px solid ${COLOR.DEFAULT};
    width: 100%;
    height: 30px;

    background: white;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${COLOR.DEFAULT};
    min-height: 40px;
`;

const TimeButtonContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 10px 50px;
    background: #f9f9f9;
`;

const TimeButton = styled.div`
    border: 1px solid ${COLOR.DEFAULT};
    width: 100%;
    height: 30px;

    background: white;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${COLOR.DEFAULT};
    min-height: 40px;
`;

const SelectedTicketContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 10px 50px;
    background: #f9f9f9;
`;
const SelectedTicketTextBox = styled.div`
    min-height: 25px;

    margin: 10px 0px;
`;
const SelectedTicketInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;

    margin: 5px 0px;
`;

const SelectedTicketName = styled.div`
    min-height: 25px;
`;

const SelectedTicketPrice = styled.div`
    min-height: 25px;
`;

const ReserveButtonBox = styled.div`
    display: flex;
    justify-content: end;

    padding: 10px 15px;
`;

const ReserveButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 60px;
    min-width: 270px;
    background: ${COLOR.DARKER};
    color: white;
`;

const TicketingReserve = () => {
    return (
        <TicketingReserveContainer>
            <TicketingReserveTextBox>
                <DateBox>날짜</DateBox>
                <TimeBox>시간</TimeBox>
            </TicketingReserveTextBox>
            <ReserveButtonContainer>
                <DateButtonContainer>
                    <DateButton>2024 07 05 friday</DateButton>
                </DateButtonContainer>
                <TimeButtonContainer>
                    <TimeButton>13h 00m</TimeButton>
                </TimeButtonContainer>
                <SelectedTicketContainer>
                    <SelectedTicketTextBox>선택한 회차별 좌석 현황</SelectedTicketTextBox>
                    <SelectedTicketInfoContainer>
                        <SelectedTicketName>ticket</SelectedTicketName>
                        <SelectedTicketPrice>121,000</SelectedTicketPrice>
                    </SelectedTicketInfoContainer>
                </SelectedTicketContainer>
            </ReserveButtonContainer>
            <ReserveButtonBox>
                <ReserveButton>예매하기</ReserveButton>
            </ReserveButtonBox>
        </TicketingReserveContainer>
    );
};

export default TicketingReserve;
