import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import { PROJECT_NAME } from 'constant';
import CategoryPanel from './CategoryPanel';
import PageHeaderAuthBtnSet from './AuthBtnSet';

const headerPadding = 5;

const PageHeaderWrapperContainer = styled.div`
    width: ${100 - 2 * headerPadding}%;
    height: 73px;
    align-items: center;
    padding: 0% ${headerPadding}%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
`;

const PageHeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 183px;
    align-items: center;
    justify-content: space-around;
`;

const LogoContainer = styled.div`
    width: fit-content;
    height: fit-content;
    font-size: 30px;
    font-weight: bold;
    color: ${COLOR.DEFAULT};
`;

const PageHeader = (props: { isLogined: boolean }) => {
    const { isLogined = true } = props;
    return (
        <PageHeaderWrapperContainer>
            <PageHeaderContainer>
                <LogoContainer>{PROJECT_NAME}</LogoContainer>
                <CategoryPanel />
                <PageHeaderAuthBtnSet isLogined={isLogined}></PageHeaderAuthBtnSet>
            </PageHeaderContainer>
        </PageHeaderWrapperContainer>
    );
};

export default PageHeader;
