import styled from '@emotion/styled';
import Image1 from '../../assets/panel/pablita-251-1.svg';
import Image2 from '../../assets/panel/pablita-673-1.svg';
import Image3 from '../../assets/panel/pablita-693.svg';
import bulb from '../../assets/panel/pablita-794-1.svg';
import man from '../../assets/panel/pablita-man-15-1.svg';
import woman1 from '../../assets/panel/pablita-woman-101.svg';
import woman2 from '../../assets/panel/pablita-woman-16-1.svg';
import { COLOR } from 'color/color';

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const TextArea = styled.div`
    display: flex;
    justify-content: center;
    height: 170px;
`;
export const TextBody = styled.div`
    font-size: 50px;
    padding-top: 70px;
    color: ${COLOR.DEFAULT};
`;

export const ImageArea = styled.div``;

const ImagePanel = () => {
    return (
        <PanelContainer>
            <TextArea>
                <TextBody>Exclusive events, priceless moments</TextBody>
            </TextArea>
            <ImageArea>
                <img src={Image3} alt="first"></img>
                <img src={Image1} alt="second"></img>
                <img src={woman1} alt="woman1"></img>
                <img src={woman2} alt="woman2"></img>
                <img src={man} alt="man"></img>
                <img src={Image2} alt="fourth"></img>
            </ImageArea>
        </PanelContainer>
    );
};
export default ImagePanel;
