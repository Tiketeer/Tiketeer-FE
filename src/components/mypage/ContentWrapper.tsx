import styled from '@emotion/styled';
import MyPageMainContent from './main/MyPageMainContent';
import MyPageChangePwdContent from './change-password/MyPageChangePwdContent';
import { MYPAGE_PATH, MyPagePathType } from './constant';
import MyPageChangeEmailContent from './change-email/MyPageChangeEmailContent';

const myPageContentWrapperPadding = 5;

const MyPageContentWrapperContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: ${myPageContentWrapperPadding}%;
    box-sizing: border-box;
`;

const MyPageContentWrapper = (props: { path: MyPagePathType }) => {
    const { path } = props;
    return (
        <MyPageContentWrapperContainer>
            {path === MYPAGE_PATH.MAIN ? (
                <MyPageMainContent />
            ) : path === MYPAGE_PATH.CHANGE_PWD ? (
                <MyPageChangePwdContent />
            ) : path === MYPAGE_PATH.CHANGE_EMAIL ? (
                <MyPageChangeEmailContent />
            ) : (
                <></>
            )}
        </MyPageContentWrapperContainer>
    );
};

export default MyPageContentWrapper;
