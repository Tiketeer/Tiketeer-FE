import styled from '@emotion/styled';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const iconOption = {
    filter: 'invert(100%)',
};

export const SNSIconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 90px;
`;

export const SocialIcon = styled.a`
    margin: 5px;
`;

const SNSIconGroup = () => {
    return (
        <SNSIconContainer>
            <SocialIcon>
                <TwitterIcon style={iconOption} />
            </SocialIcon>
            <SocialIcon>
                <InstagramIcon style={iconOption} />
            </SocialIcon>
            <SocialIcon>
                <FacebookIcon style={iconOption} />
            </SocialIcon>
        </SNSIconContainer>
    );
};

export default SNSIconGroup;
