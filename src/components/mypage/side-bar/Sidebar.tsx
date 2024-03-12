import styled from '@emotion/styled';
import { COLOR } from 'color/color';
import { useNavigate } from 'react-router-dom';
import { MyPagePathType } from '../constant';
import MyPageSideBarBody from './SidebarBody';
import { PathToButtonKey } from './constant';

export const MyPageSideBarContainer = styled.div`
    min-width: 18vw;
    min-height: 80vh;
    padding: 4vh 2vw 0px 3vw;
    font-family: Abhaya Libre;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 4px 0 2px -2px rgba(0, 0, 0, 0.26);
    box-sizing: border-box;
`;

export const MyPageSideBarTitleContainer = styled.div`
    width: 100%;
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
            <MyPageSideBarBody selectorKey={PathToButtonKey[path]} />
        </MyPageSideBarContainer>
    );
};

export default MyPageSideBar;
