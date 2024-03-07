import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import SNSIconGroup from './SNSIconGroup';

const footerPadding = 5;

export const PageFooterWrapperContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: ${100 - 2 * footerPadding}%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    padding: 0% ${footerPadding}%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
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
