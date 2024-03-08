import styled from '@emotion/styled';
import dashedLine from '../../assets/image/dashed_line.png';

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
    border: 1.5px solid #4f4cee;
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
export const PaymentSection = styled.section`
    width: 30vw;
`;
export const DetailsSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 25vw;
`;
export const EventDetails = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 34px;
`;
export const OrderSummary = styled.section`
    display: flex;
    flex-direction: column;
`;

export const SectionTitle = styled.div`
    font:
        24px 'General Sans',
        sans-serif;
    font-weight: 500;
    color: #000;
`;

export const OptionStyled = styled.div`
    margin-top: 25px;
    padding: 2px;
    border: 1px solid #828282;
    border-radius: 4px;
    display: flex;
    cursor: pointer;
    box-sizing: border-box;
`;

export const OptionHighlightStyled = styled(OptionStyled)`
    margin-top: 25px;
    box-shadow: 6px 8px 0px 0px #0022ba;
    border: 2px solid #4f4cee;
    cursor: pointer;
    box-sizing: border-box;
`;

export const OptionDetails = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const OptionLabel = styled.div`
    color: ${props => (props.defaultChecked ? '#4f4cee' : '#1b1b25')};
    font-size: 14px;
    font-weight: 500;
`;

export const EventImage = styled.img`
    width: 163px;
    aspect-ratio: 2.13;
    border: 0;
`;

export const EventContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const EventName = styled.h3`
    font-size: 16px;
    color: #000;
`;

export const Location = styled.div`
    display: flex;
    gap: 8px;
`;

export const DateTime = styled.div`
    display: flex;
    gap: 8px;
`;

export const LocationIcon = styled.img`
    width: 18px;
    aspect-ratio: 1;
`;

export const DateTimeIcon = LocationIcon;

export const LocationDetails = styled.span``;
export const DateTimeDetails = styled.span``;

export const SummaryTitle = styled.div`
    font:
        20px 'General Sans',
        sans-serif;
    font-weight: 500;
    padding-top: 10px;
`;
export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
`;

export const ItemTitle = styled.div`
    font:
        16px 'General Sans',
        sans-serif;
`;
export const ItemDetails = styled.div`
    font:
        16px 'General Sans',
        sans-serif;
    font-weight: 500;
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    font-weight: 500;
`;

export const TotalTitle = styled.div``;
export const TotalAmount = styled.div``;

export const VerticalDivider = styled.div`
    background-color: #ddddde;
    width: 3px;
    height: 622px;
`;

export const HorizontalDivider = styled.div`
    background-image: url(${dashedLine});
    min-height: 1px;
    margin-top: 25px;
    width: 100%;
`;

export const PaymentButton = styled.button`
    background-color: #4f4cee;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 13px 15px;
    font-weight: 500;
    margin-top: 51px;
    cursor: pointer;
    width: 184px;
    margin: 25px auto;
`;
