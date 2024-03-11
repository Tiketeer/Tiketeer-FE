import styled from '@emotion/styled';
import { COLOR } from 'color/color';

const TicketingOpenInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #ccc;

    margin: 0px 10px 10px 10px;
`;

const TicketingOpenInfoText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${COLOR.DEFAULT};
    min-height: 100px;

    font-size: 35px;
`;

const TicketingOpenInfo = () => {
    return (
        <TicketingOpenInfoContainer>
            <TicketingOpenInfoText>2024.03.05(TUE) 20:00 open</TicketingOpenInfoText>
        </TicketingOpenInfoContainer>
    );
};

export default TicketingOpenInfo;
