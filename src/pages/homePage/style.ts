import styled from 'styled-components';
import {COLORS} from "../../styles";

export const HomeWrap = styled.section`
  width: 100%;
  margin: 0 auto;
  //display: flex;
`

export const HomeContainer = styled.div`
  width: 75%;
  min-height: 840px;
  padding: 150px 0px 50px;
  margin: 0 auto 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1050px) {
    padding: 150px 0 100px;
  }
`

export const BtnFilmLoader = styled.button`
  display: block;
  width: 150px;
  height: 50px;
  margin: 0 auto;
  padding: 0;
  background: ${COLORS.primary};
  border-radius: 5px;
  font-family: 'Exo 2', sans-serif;
  color: ${COLORS.whiteContext};
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  position: relative;

  :hover {
    background: ${COLORS.primary2};
  }
`

export const LoaderMoreBtn = styled.span`
  position: relative;
  overflow: hidden;
  right: 65px;
  top: -70px;
  width: 40px;
  height: 40px;

  &:before {
    content: "";
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
    border: 5px solid #8a78e0;
    border-color: rgba(138, 120, 224, 0.76) rgba(138, 120, 224, 0.62) #8a78e0 #5f4bc4;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotate 2s ease-in-out infinite;
    transform: rotate(-200deg);
  }

  @keyframes rotate {
    0% {
      border-width: 10px;
    }
    25% {
      border-width: 3px;
    }
    50% {
      transform: rotate(115deg);
      border-width: 10px;
    }
    75% {
      border-width: 3px;
    }
    100% {
      border-width: 10px;
    }
  }

`
