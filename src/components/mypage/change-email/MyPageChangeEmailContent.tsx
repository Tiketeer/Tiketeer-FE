import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import CommonButton from 'components/button/CommonButton';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';

const ChangeEmailContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const ChangeEmailContentTitleContainer = styled.div`
    font-family: Abhaya Libre;
    font-size: 40px;
    font-weight: bold;
`;

const InputEmailElementContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    padding-right: 560px;
    box-sizing: border-box;
`;

const InputEmailBtnSetContainer = styled.div`
    width: 400px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 30px 15px;
    box-sizing: border-box;
`;

const InputEmailElement = (props: { id: string; title: string; onChange: ChangeEventHandler }) => {
    const { id, title, onChange } = props;
    return (
        <InputEmailElementContainer>
            <TextField
                id={id}
                label={title}
                type="email"
                autoComplete="current-password"
                variant="standard"
                style={{ width: '400px' }}
                onChange={onChange}
            />
        </InputEmailElementContainer>
    );
};

const MyPageChangeEmailContent = () => {
    const [newEmail, setNewEmail] = useState('');
    const emailChangeHandler: ChangeEventHandler = (event: ChangeEvent<Element>) => {
        setNewEmail((event.target as any).value ?? '');
    };
    return (
        <ChangeEmailContentContainer>
            <ChangeEmailContentTitleContainer>Change Email</ChangeEmailContentTitleContainer>
            <InputEmailElement
                id="new-email-input"
                title="New Email"
                onChange={emailChangeHandler}
            />
            <InputEmailBtnSetContainer>
                <CommonButton
                    text="Confirm"
                    isFilled={true}
                    callback={() => {
                        console.log(newEmail);
                    }}
                />
                <CommonButton
                    text="Cancel"
                    isFilled={false}
                    callback={() => {
                        console.log('Cancel');
                    }}
                />
            </InputEmailBtnSetContainer>
        </ChangeEmailContentContainer>
    );
};

export default MyPageChangeEmailContent;
