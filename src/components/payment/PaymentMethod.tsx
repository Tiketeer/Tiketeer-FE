import styled from '@emotion/styled';
import { Radio } from '@mui/material';
import { COLOR } from 'color/color';
import { ReactElement } from 'react';
import SectionTitle from './SectionTitle';

export const PaymentSection = styled.section`
    width: 30vw;
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
    border: 2px solid ${COLOR.DEFAULT};
    cursor: pointer;
    box-sizing: border-box;
`;

export const OptionDetails = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const OptionLabel = styled.div`
    color: ${props => (props.defaultChecked ? '${COLOR.DEFAULT}' : '#1b1b25')};
    font-size: 14px;
    font-weight: 500;
`;

function Option({
    onClick,
    children,
}: {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    children: ReactElement;
}) {
    return <OptionStyled onClick={onClick}>{children}</OptionStyled>;
}

function OptionHighlight({
    onClick,
    children,
}: {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    children: ReactElement;
}) {
    return <OptionHighlightStyled onClick={onClick}>{children}</OptionHighlightStyled>;
}

const PaymentOption = ({
    isChecked,
    onClick,
    children,
}: {
    isChecked: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    children: ReactElement;
}) => {
    return isChecked ? (
        <OptionHighlight onClick={onClick}>{children}</OptionHighlight>
    ) : (
        <Option onClick={onClick}>{children}</Option>
    );
};

const PaymentMethod = (props: {
    selectedValue: string;
    setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const { selectedValue, setSelectedValue } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <PaymentSection>
            <SectionTitle title="Payment Method" />
            <PaymentOption
                isChecked={selectedValue === 'point'}
                onClick={() => setSelectedValue('point')}
            >
                <OptionDetails>
                    <Radio
                        checked={selectedValue === 'point'}
                        onChange={handleChange}
                        value="point"
                        name="radio-buttons"
                    />
                    <OptionLabel defaultChecked={selectedValue === 'point'}>Point</OptionLabel>
                </OptionDetails>
            </PaymentOption>
            <PaymentOption
                isChecked={selectedValue === 'card'}
                onClick={() => setSelectedValue('card')}
            >
                <OptionDetails>
                    <Radio
                        checked={selectedValue === 'card'}
                        onChange={handleChange}
                        value="card"
                        name="radio-buttons"
                    />
                    <OptionLabel defaultChecked={selectedValue === 'card'}>
                        Credit/Debit Card
                    </OptionLabel>
                </OptionDetails>
            </PaymentOption>
        </PaymentSection>
    );
};

export default PaymentMethod;
