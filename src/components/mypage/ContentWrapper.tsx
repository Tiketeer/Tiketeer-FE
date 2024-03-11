import styled from '@emotion/styled';
import MyPageChangeEmailContent from './change-email/MyPageChangeEmailContent';
import MyPageChangePwdContent from './change-password/MyPageChangePwdContent';
import { MYPAGE_PATH, MyPagePathType } from './constant';
import MyPageMainContent from './main/MyPageMainContent';
import MyPagePurchaseDetailContent from './purchase-detail/MyPagePurchaseDetailContent';
import MyPagePurchasesContent from './purchases/MyPagePurchasesContent';

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
            ) : path === MYPAGE_PATH.PURCHASE ? (
                <MyPagePurchasesContent />
            ) : path === MYPAGE_PATH.PURCHASE_DETAIL ? (
                <MyPagePurchaseDetailContent />
            ) : (
                <></>
            )}
        </MyPageContentWrapperContainer>
    );
};

export default MyPageContentWrapper;
