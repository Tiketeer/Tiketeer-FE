import styled from '@emotion/styled';
import SideBarElement from './SidebarElement';

export const MyPageSideBarBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-left: 6px;
`;

const MyPageSideBarBody = (props: { contents: Record<string, string[]>; selectorKey?: string }) => {
    const { contents, selectorKey } = props;
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
