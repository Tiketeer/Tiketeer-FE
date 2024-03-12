import styled from '@emotion/styled';
import { Checkbox, Modal } from '@mui/material';
import CancelButton from 'components/button/CancelButton';
import React, { useState } from 'react';
import { refundTicketInfo } from 'type/refund';

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    max-width: 453px;
    max-height: 460px;
    padding: 42px 24px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.28);
    white-space: nowrap;
    outline: none;
    /* overflow: hidden; */
`;

const Title = styled.h2`
    margin: 0;
    color: #000;
    font:
        700 24px Inter,
        sans-serif;
`;

const Description = styled.p`
    margin: 4px 0 0;
    color: #898989;
    font:
        400 14px Inter,
        sans-serif;
`;

const TicketList = styled.ul`
    max-height: 400px;
    margin: 24px 0 0;
    padding: 0;
    list-style: none;
    overflow-y: scroll;
`;

const TicketItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding-left: 9px;
    font-size: 20px;
    color: #000;
    font-weight: 700;
    &:not(:first-child) {
        margin-top: 24px;
    }
`;

const TicketDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: fit-content;
    background-color: #fff;
    padding-right: 20px;
`;

const TicketName = styled.h3`
    margin: 0;
    justify-content: center;
    font-family:
        Abhaya Libre,
        sans-serif;
    background-color: #fff;
`;

const TicketDate = styled.p`
    margin: 6px 0 0;
    justify-content: center;
    color: #979797;
    font:
        14px Abhaya Libre,
        sans-serif;
    background-color: #fff;
`;

const TicketType = styled.p`
    margin: 6px 0 0;
    justify-content: center;
    color: #979797;
    font:
        14px Abhaya Libre,
        sans-serif;
    background-color: #fff;
`;

const TicketPrice = styled.p`
    margin: 0;
    padding: 2px 0;
    justify-content: center;
    font-family:
        Abhaya Libre,
        sans-serif;
    background-color: #fff;
`;

const TicketSelectWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const TicketSelectCheckbox = styled(Checkbox)`
    padding: 0;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 16px;
    margin-top: 24px;
    font-size: 14px;
    font-weight: 400;
`;

interface TicketCancellationProps {
    open: boolean;
    onClose: () => void;
    tickets: refundTicketInfo[];
}

const TicketCancellation: React.FC<TicketCancellationProps> = ({ open, onClose, tickets }) => {
    const [selectedTickets, setSelectedTickets] = useState<string[]>(tickets.map(({ id }) => id));

    const handleTicketSelect = (ticketId: string) => {
        const isSelected = selectedTickets.includes(ticketId);
        if (isSelected) {
            setSelectedTickets(selectedTickets.filter(id => id !== ticketId));
        } else {
            setSelectedTickets([...selectedTickets, ticketId]);
        }
    };

    const handleCancelClick = () => {
        // Handle ticket cancellation logic here
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <ModalBackground>
                <Container>
                    <Title>예매 취소 요청</Title>
                    <Description>
                        취소 완료 후에는 되돌릴 수 없습니다. 티켓을 취소하시겠습니까?
                    </Description>
                    <TicketList>
                        {tickets.map(ticket => (
                            <TicketItem key={ticket.id}>
                                <TicketSelectWrapper>
                                    <TicketSelectCheckbox
                                        checked={selectedTickets.includes(ticket.id)}
                                        onChange={() => handleTicketSelect(ticket.id)}
                                        color="primary"
                                    />
                                </TicketSelectWrapper>
                                <TicketDetails>
                                    <TicketName>{ticket.title}</TicketName>
                                    <TicketDate>{ticket.eventTime}</TicketDate>
                                    <TicketType>{ticket.ticketType}</TicketType>
                                    <TicketPrice>{ticket.price.toLocaleString()}₩</TicketPrice>
                                </TicketDetails>
                            </TicketItem>
                        ))}
                    </TicketList>
                    <ButtonGroup>
                        <CancelButton
                            text="예"
                            callback={handleCancelClick}
                            isFilled={false}
                            isDisabled={selectedTickets.length === 0}
                        />
                        <CancelButton text="아니오" callback={onClose} />
                    </ButtonGroup>
                </Container>
            </ModalBackground>
        </Modal>
    );
};

export default TicketCancellation;
