import styled from '@emotion/styled';
import MyPageSideBar from 'components/mypage/Sidebar';
import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';

const MyPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const bodyPadding = 5;
const MyPageBodyContainer = styled.div`
    width: ${100 - 2 * bodyPadding}%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 0% ${bodyPadding}%;
`;

const MyPage = () => {
    return (
        <MyPageContainer>
            <PageHeader isLogined={true} />
            <MyPageBodyContainer>
                <MyPageSideBar />
            </MyPageBodyContainer>
            <PageFooter />
        </MyPageContainer>
    );
};

export default MyPage;
