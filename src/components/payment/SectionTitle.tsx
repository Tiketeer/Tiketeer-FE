import styled from '@emotion/styled';

const SectionTitleStyled = styled.div`
    font:
        24px 'General Sans',
        sans-serif;
    font-weight: 500;
    color: #000;
`;

const SectionTitle = (props: { title: string }) => {
    return <SectionTitleStyled>{props.title}</SectionTitleStyled>;
};

export default SectionTitle;
