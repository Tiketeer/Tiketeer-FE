import styled from '@emotion/styled';

export const PaymentButtonStyled = styled.button`
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

const PaymentButton = (props: { text: string; callback?: () => Promise<void> }) => {
    const { callback, text } = props;
    return <PaymentButtonStyled onClick={callback}>{text}</PaymentButtonStyled>;
};

export default PaymentButton;
