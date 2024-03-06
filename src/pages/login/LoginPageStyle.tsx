import styled from '@emotion/styled';
import loginBg from '../../assets/image/login_bg.png';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SplitScreenContainer = styled.div`
    display: flex;
    height: 100vh;
`;

export const LeftHalf = styled.div`
    flex-grow: 1;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${loginBg});
    background-size: cover;
    background-position: center;
    opacity: 0;
    animation: ${fadeIn} 1s ease-in forwards;
`;

export const RightHalf = styled.div`
    width: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const CenteredTextWrapper = styled.div`
    text-align: center;
`;

export const CenteredText = styled.div`
    color: #ffffff;
    font-size: 64px;
    font-family: 'Times New Roman', sans-serif;
`;

export const EntryFormContainer = styled.div`
    width: 400px;
    height: 70%;
    background-color: #fff;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
`;
