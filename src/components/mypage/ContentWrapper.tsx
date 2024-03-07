import styled from '@emotion/styled';
import MyPageMainContent from './main/MyPageMainContent';

const myPageContentWrapperPadding = 5;

const MyPageContentWrapperContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: ${myPageContentWrapperPadding}%;
    box-sizing: border-box;
`;

const MyPageContentWrapper = (props: { path?: string }) => {
    const { path = '/' } = props;
    return (
        <MyPageContentWrapperContainer>
            {path === '/' ? <MyPageMainContent></MyPageMainContent> : <></>}
        </MyPageContentWrapperContainer>
    );
};

export default MyPageContentWrapper;
