import styled from '@emotion/styled';
import SideBarElementButton from './SidebarElementBtn';

export const MyPageSideBarElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const MyPageSideBarElementTitleContainer = styled.div`
    font-size: 18px;
`;

export const MyPageSideBarElementContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 17px;
`;

const SideBarElement = (props: {
    title: string;
    buttonKeyList: string[];
    selectorKey?: string;
}) => {
    const { title, buttonKeyList, selectorKey } = props;
    return (
        <MyPageSideBarElementContainer>
            <MyPageSideBarElementTitleContainer>{title}</MyPageSideBarElementTitleContainer>
            <MyPageSideBarElementContentContainer>
                {buttonKeyList.map(buttonKey => {
                    return (
                        <SideBarElementButton
                            text={buttonKey}
                            isSelected={buttonKey === selectorKey}
                        />
                    );
                })}
            </MyPageSideBarElementContentContainer>
        </MyPageSideBarElementContainer>
    );
};

export default SideBarElement;
