import styled from '@emotion/styled';
import { COLOR } from 'color/color';

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 15px;
    border: 1px solid ${COLOR.LIGHTER};
    border-radius: 8px;
`;

const RateBarContainer = styled.div<{ rate: number }>`
    background-color: ${COLOR.LIGHTER};
    width: ${props => props.rate + '%'};
    height: 100%;
    border-radius: 5px;
`;

const ProgressBar = (props: { rate: number }) => {
    const { rate } = props;
    return (
        <ProgressBarContainer>
            <RateBarContainer rate={rate} />
        </ProgressBarContainer>
    );
};

export default ProgressBar;
