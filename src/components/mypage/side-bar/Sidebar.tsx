import styled from '@emotion/styled';
import MyPageSideBarBody from './SidebarBody';
import { COLOR } from 'color/color';

export const MyPageSideBarContainer = styled.div`
    width: fit-content;
    height: 85vh;
    padding: 32px 0px 0px 96px;
    font-family: Abhaya Libre;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 4px 0 2px -2px rgba(0, 0, 0, 0.26);
    box-sizing: border-box;
`;

export const MyPageSideBarTitleContainer = styled.div`
    width: 196px;
    height: 56px;
    font-size: 24px;
    font-weight: bold;
    &:hover {
        color: ${COLOR.DEFAULT};
    }
`;

const MyPageSideBar = () => {
    const content = {
        'Ticketing Info': ['Purchases', 'Sales'],
        'My Info': ['Change Password', 'Change Email'],
    };

    return (
        <MyPageSideBarContainer>
            <MyPageSideBarTitleContainer>My Page</MyPageSideBarTitleContainer>
            <MyPageSideBarBody contents={content}></MyPageSideBarBody>
        </MyPageSideBarContainer>
    );
};

export default MyPageSideBar;
