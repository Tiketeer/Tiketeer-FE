import styled from '@emotion/styled';
import MyPageContentWrapper from 'components/mypage/ContentWrapper';
import MyPageSideBar from 'components/mypage/side-bar/Sidebar';
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
    height: max-content;
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
                <MyPageContentWrapper />
            </MyPageBodyContainer>
            <PageFooter />
        </MyPageContainer>
    );
};

export default MyPage;
