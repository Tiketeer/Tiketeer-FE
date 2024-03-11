import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import { ContainedButton } from 'components/button/ButtonStyle';
import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';
import TicketingRegister from 'components/ticketing/TicketingRegister';

const TicketingRegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50vw;
    heigh: 100vh;
    margin: 0 auto;
    border: 1px solid;
    gap: 20px;
`;

const TicketingRegisterPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;

const HeaderText = styled.div`
    font-size: 5rem;
    font-weight: 600;
    color: ${COLOR.DEFAULT};
`;

const TicketingRegisterPage = () => {
    return (
        <TicketingRegisterPageContainer>
            <PageHeader isLogined />
            <TicketingRegisterContainer>
                <HeaderText>새로운 티케팅 등록</HeaderText>
                <TicketingRegister />
                <ContainedButton
                    style={{ margin: '20px', fontSize: 14, color: 'white', width: '20%' }}
                >
                    등록하기
                </ContainedButton>
            </TicketingRegisterContainer>
            <PageFooter />
        </TicketingRegisterPageContainer>
    );
};

export default TicketingRegisterPage;
