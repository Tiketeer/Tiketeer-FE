import styled from '@emotion/styled';
import { COLOR } from 'color/color';

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
`;

export const CategoryElementBtn = styled.button`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    font-family: Abhaya Libre;
    background: white;
    border: none;
    transition: 0.5s;
    &:hover {
        color: ${COLOR.DEFAULT};
        transition: 0.5s;
    }
`;

const CategoryPanel = () => {
    return (
        <CategoryContainer>
            {CategoryList.map(category => {
                return (
                    <CategoryElementContainer>
                        <CategoryElementBtn>{category}</CategoryElementBtn>
                    </CategoryElementContainer>
                );
            })}
        </CategoryContainer>
    );
};

export default CategoryPanel;
