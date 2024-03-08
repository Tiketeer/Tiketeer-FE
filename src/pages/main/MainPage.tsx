import styled from '@emotion/styled';
import ImagePanel from 'components/image-panel/ImagePanel';
import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const MainPage = () => {
    return (
        <MainContainer>
            <PageHeader isLogined={false} />
            <ImagePanel />
            <PageFooter />
        </MainContainer>
    );
};

export default MainPage;
