import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import { PROJECT_NAME } from 'constant';
import { useNavigate } from 'react-router-dom';
import PageHeaderAuthBtnSet from './AuthBtnSet';
import CategoryPanel from './CategoryPanel';

const headerPadding = 5;

const PageHeaderWrapperContainer = styled.div`
    width: 100vw;
    height: 9vh;
    align-items: center;
    padding: 0% ${headerPadding}%;
    box-sizing: border-box;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
`;

const PageHeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 20%;
    align-items: center;
    justify-content: space-evenly;
`;

const LogoContainer = styled.div`
    width: fit-content;
    height: fit-content;
    font-size: 30px;
    font-weight: bold;
    color: ${COLOR.DEFAULT};
`;

const PageHeader = () => {
    const navigate = useNavigate();
    return (
        <PageHeaderWrapperContainer>
            <PageHeaderContainer>
                <LogoContainer
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    {PROJECT_NAME}
                </LogoContainer>
                <CategoryPanel />
                <PageHeaderAuthBtnSet></PageHeaderAuthBtnSet>
            </PageHeaderContainer>
        </PageHeaderWrapperContainer>
    );
};

export default PageHeader;
