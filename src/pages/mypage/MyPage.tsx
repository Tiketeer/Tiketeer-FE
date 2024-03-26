import styled from '@emotion/styled';
import MyPageContentWrapper from 'components/mypage/ContentWrapper';
import { MYPAGE_PATH, MyPagePathType } from 'components/mypage/constant';
import MyPageSideBar from 'components/mypage/side-bar/Sidebar';
import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';

const MyPageContainer = styled.div`
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
`;

const bodyPadding = 5;
const MyPageBodyContainer = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    padding: 0% ${bodyPadding}%;
    box-sizing: border-box;
`;

const MyPage = (props: { path?: MyPagePathType }) => {
    const { path = MYPAGE_PATH.MAIN } = props;
    return (
        <MyPageContainer>
            <PageHeader />
            <MyPageBodyContainer>
                <MyPageSideBar path={path} />
                <MyPageContentWrapper path={path} />
            </MyPageBodyContainer>
            <PageFooter />
        </MyPageContainer>
    );
};

export default MyPage;
