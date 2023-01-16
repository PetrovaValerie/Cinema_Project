import styled from "styled-components";
import {COLORS} from "../../../styles";

export const SimSliderWrap = styled.section`
  margin: 20px auto;
  width: 80%;
  max-width: 1200px;
  max-height: 300px;
  
  .slick-slider {
    overflow: hidden;
    position: relative;

    .slick-arrow {
      position: absolute;
      width: 10%;
      height: 100%;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s;
      opacity: 0;

      & svg {
        width: 50%;
        height: 50%;
      }
    }

    .slick-next {
      top: 0;
      right: 0;
    }

    &:hover .slick-arrow {

      transition: 0.5s;
      opacity: 0.9;
    }

    &:hover .slick-disabled {
      opacity: 0;
      display: none;
      transition: 0.5s;
    }
  }

  .slick-track {
    display: flex;

  }

  .slick-slide {
    margin: 10px 5px;

    div {
      width: 100%;
      height: 100%;

    }
  }
`

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    scale: 1.05;
    transition: 0.5s;
  }
    `

export const SliderImgBlock = styled.div`
  width: 100%;
  height: 100%;
  max-width: 250px;
    `

export const SliderImg = styled.img`
  width: 100%;
  height: 100%;
    `