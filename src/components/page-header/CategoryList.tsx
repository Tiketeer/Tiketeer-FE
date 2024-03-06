import styled from '@emotion/styled';

export const CategoryList = ['Concerts', 'Arts', 'Conference', 'Movies', 'International'];

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 35px;
    justify-content: center;
    padding: 16px 12px;
`;

export const CategoryElementContainer = styled.div`
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    font-family: Abhaya Libre;
`;

const CategoryPanel = () => {
    return (
        <CategoryContainer>
            {CategoryList.map(category => {
                return <CategoryElementContainer>{category}</CategoryElementContainer>;
            })}
        </CategoryContainer>
    );
};

export default CategoryPanel;
