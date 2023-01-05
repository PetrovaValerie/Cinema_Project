import styled from 'styled-components';
import {COLORS} from '../../../styles';

export const CardItem = styled.div`
    position: relative;
    display: grid;
    //min-width: 150px;
    max-width: 70%;
    //height: 200px;
    min-height: 240px;
    height:auto;
    grid-row-gap: 5%;
    //display: grid;
    //  grid-area: card;

    font-family: 'Exo 2', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  
      h3 {
        color: ${COLORS.whiteContext};
        margin-top: 24px;
      }
      span {
        position: absolute;
        top: 5%;
        left: 2%;
        z-index:2;
        width: 39px;
        height: 28px;
        background-color: ${COLORS.green};
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${COLORS.whiteContext};
        font-weight: 600;
      }
`

export const Img = styled.div<{ image: string }>`
    width: 265px;
    max-width: 70%;
    //height: 357px;
    height: 200px;
    border-radius: 20px;
  
  //width: 100%;
  //height: 357px;
  //height: 200px;
  //height: auto;
  //height: 50%;
  background-image: url(${({image}) => image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  //border-top-right-radius: 10px;
  //border-top-left-radius: 10px;
  display: flex;
  justify-content: space-between;
  `

export const CategoryList = styled.ul`
    margin-top: 5px;
    display: flex;
    //flex-direction: column;
    //justify-content: flex-start;
    //align-items: center;
      li { 
          color: ${COLORS.lightContext};
          margin-right: 20px;
          :not(:nth-child(1)) {
            list-style-type: disc;
        }
    }  
`

