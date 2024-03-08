import styled from '@emotion/styled';
import SideBarElement from './SidebarElement';
import { Contents } from './constant';

const MyPageSideBarBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-left: 6px;
    box-sizing: border-box;
`;

const MyPageSideBarBody = (props: { selectorKey?: string }) => {
    const contents = Contents;
    const { selectorKey } = props;
    return (
        <MyPageSideBarBodyContainer>
            {Object.keys(contents).map(title => {
                return (
                    <SideBarElement
                        title={title}
                        buttonKeyList={contents[title]}
                        selectorKey={selectorKey}
                    />
                );
            })}
        </MyPageSideBarBodyContainer>
    );
};

export default MyPageSideBarBody;
