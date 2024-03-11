import styled from '@emotion/styled';
import MyPageSideBarBody from './SidebarBody';
import { COLOR } from 'color/color';
import { MyPagePathType } from '../constant';
import { PathToButtonKey } from './constant';
import { useNavigate } from 'react-router-dom';

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

const MyPageSideBar = (props: { path: MyPagePathType }) => {
    const { path } = props;
    const navigate = useNavigate();
    return (
        <MyPageSideBarContainer>
            <MyPageSideBarTitleContainer onClick={() => navigate('/mypage')}>
                My Page
            </MyPageSideBarTitleContainer>
            <MyPageSideBarBody selectorKey={PathToButtonKey[path]}></MyPageSideBarBody>
        </MyPageSideBarContainer>
    );
};

export default MyPageSideBar;
