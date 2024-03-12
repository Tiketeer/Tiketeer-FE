import styled from '@emotion/styled';
import { COLOR } from 'color/color';

const CategoryList = ['Concerts', 'Arts', 'Conference', 'Movies', 'International'];

const CategoryContainer = styled.div`
    max-width: 45vw;
    display: flex;
    flex-direction: row;
    gap: 2vw;
    justify-content: center;
    padding: 1vh 1vw;
    box-sizing: border-box;
`;

const CategoryElementContainer = styled.div`
    padding: 10px;
    box-sizing: border-box;
`;

const CategoryElementBtn = styled.button`
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
