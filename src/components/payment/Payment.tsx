import styled from '@emotion/styled';
import { COLOR } from 'color/color';

export const PageWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MainContent = styled.main`
    /* padding: 100px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

export const PaymentBackButton = styled.button`
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5.26px;
    border: 1.5px solid ${COLOR.DEFAULT};
    background-color: #fff;
    padding: 0 7px;
    margin: 88px 20px 0px 88px;
`;

export const PaymentIcon = styled.img`
    width: 32px;
    aspect-ratio: 1;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
`;

export const PaymentMethodContainer = styled.div`
    display: flex;
    /* width: 312px; */
    justify-content: start;
    gap: 20px;
    margin: 88px 0 0 20px;
    @media (max-width: 991px) {
        margin: 40px 0 0 10px;
    }
`;

export const PaymentMethodTitle = styled.div`
    color: #1b1b25;
    flex-grow: 1;
    font:
        700 30px Abhaya Libre,
        sans-serif;
`;

export const Content = styled.div`
    align-self: center;
    display: flex;
    align-items: start;
    gap: 18px;
    margin-top: 50px;
    padding: 0 20px;
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`;

// Reusable Components for Sections, Options, and Dividers
export const VerticalDivider = styled.div`
    background-color: #ddddde;
    width: 3px;
    height: 622px;
`;
