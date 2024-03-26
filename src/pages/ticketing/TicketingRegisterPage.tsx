import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';
import TicketingRegisterContent from 'components/ticketing/TicketingRegister';

const TicketingRegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50vw;
    margin: 0 auto;
    /* gap: 20px; */
`;

const TicketingRegisterPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
`;

const HeaderText = styled.div`
    font-size: 4rem;
    font-weight: 600;
    padding: 30px;
    color: ${COLOR.DEFAULT};
`;

const TicketingRegisterPage = () => {
    return (
        <TicketingRegisterPageContainer>
            <PageHeader isLogined />
            <TicketingRegisterContainer>
                <HeaderText>새로운 티케팅 등록하기</HeaderText>
                <TicketingRegisterContent />
            </TicketingRegisterContainer>
            <PageFooter />
        </TicketingRegisterPageContainer>
    );
};

export default TicketingRegisterPage;
