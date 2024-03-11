import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import CommonButton from 'components/button/CommonButton';
import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';

const ChangePwdContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const ChangePwdContentTitleContainer = styled.div`
    font-family: Abhaya Libre;
    font-size: 40px;
    font-weight: bold;
`;

const InputPwdElementContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    padding-right: 560px;
    box-sizing: border-box;
`;

const InputPwdBtnSetContainer = styled.div`
    width: 400px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 30px 15px;
    box-sizing: border-box;
`;

const InputPwdElement = (props: { id: string; title: string; onChange: ChangeEventHandler }) => {
    const { id, title, onChange } = props;
    return (
        <InputPwdElementContainer>
            <TextField
                id={id}
                label={title}
                type="password"
                autoComplete="current-password"
                variant="standard"
                style={{ width: '400px' }}
                onChange={onChange}
            />
        </InputPwdElementContainer>
    );
};

const MyPageChangePwdContent = () => {
    const [oldPwd, setOldPwd] = useState('');
    const [newPwd, setNewPwd] = useState('');
    const changeHandler: (
        setState: Dispatch<SetStateAction<string>>,
    ) => ChangeEventHandler = setState => {
        return (event: ChangeEvent<Element>) => {
            setState((event.target as any).value ?? '');
        };
    };
    return (
        <ChangePwdContentContainer>
            <ChangePwdContentTitleContainer>Change Password</ChangePwdContentTitleContainer>
            <InputPwdElement
                id="old-pwd-input"
                title="Old Password"
                onChange={changeHandler(setOldPwd)}
            />
            <InputPwdElement
                id="new-pwd-input"
                title="New Password"
                onChange={changeHandler(setNewPwd)}
            />
            <InputPwdBtnSetContainer>
                <CommonButton
                    text="Confirm"
                    isFilled={true}
                    callback={() => {
                        console.log(oldPwd);
                        console.log(newPwd);
                    }}
                />
                <CommonButton
                    text="Cancel"
                    isFilled={false}
                    callback={() => {
                        console.log('Cancel');
                    }}
                />
            </InputPwdBtnSetContainer>
        </ChangePwdContentContainer>
    );
};

export default MyPageChangePwdContent;
