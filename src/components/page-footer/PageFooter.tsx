import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import SNSIconGroup from './SNSIconGroup';

const footerPadding = 5;

export const PageFooterWrapperContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
    padding: 0% ${footerPadding}%;
    box-sizing: border-box;
    background: linear-gradient(
        to bottom,
        ${COLOR.DARKER} 14%,
        white 14%,
        white 15%,
        ${COLOR.DARKER} 14%
    );
`;

export const CopyrightContainer = styled.div`
    color: white;
    margin: 90px;
`;

const PageFooter = () => {
    return (
        <PageFooterWrapperContainer>
            <SNSIconGroup></SNSIconGroup>
            <CopyrightContainer>
                <p>@ 2024 Tiketeer Incorporated</p>
            </CopyrightContainer>
        </PageFooterWrapperContainer>
    );
};

export default PageFooter;
