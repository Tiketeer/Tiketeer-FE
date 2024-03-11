import styled from '@emotion/styled';
import { COLOR } from 'color/color';

export const TicketQuantitySelectorContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;

    align-items: flex-start;

    min-height: 230px;
`;

export const TicketNameBox = styled.div`
    min-height: 30px;

    display: flex;
    align-items: center;

    padding: 5px 10px;

    border: 1px solid black;
    border-radius: 5px;

    margin: 20px 20px 20px 0px;
`;

export const TicketQuantityDropdown = styled.select`
    min-height: 35px;

    background-color: white;
    border: none;
    border-bottom: 2px solid ${COLOR.DEFAULT};

    margin: 20px 10px 20px 0px;
`;
export const TicketQuantityDropdownOption = styled.option``;

const TicketQuantitySelector = () => {
    return (
        <TicketQuantitySelectorContainer>
            <TicketNameBox>Gold Ticket</TicketNameBox>
            <TicketQuantityDropdown>
                <TicketQuantityDropdownOption value={0}>0매</TicketQuantityDropdownOption>
                <TicketQuantityDropdownOption value={1}>1매</TicketQuantityDropdownOption>
                <TicketQuantityDropdownOption value={2}>2매</TicketQuantityDropdownOption>
                <TicketQuantityDropdownOption value={3}>3매</TicketQuantityDropdownOption>
            </TicketQuantityDropdown>
        </TicketQuantitySelectorContainer>
    );
};

export default TicketQuantitySelector;
