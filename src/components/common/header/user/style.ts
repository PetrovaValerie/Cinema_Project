import styled from 'styled-components';
import {COLORS} from '../../../../styles';

export const UserWrap = styled.div`
     width: 10%;
     margin: 1% 4% 1% 0;
     height: auto;
     cursor: pointer;
     display: flex;
     justify-content: center;
     align-items: center;
     position: relative;
     top: 0;
     right: 0;
  
      p {
        padding: 0 20px;
        font-family: 'Exo 2', sans-serif;
        color: ${COLORS.whiteContext};
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
      }
      ::after {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-top: 2px solid #ccc;
        border-right: 2px solid #ccc;
        position: absolute;
        top: 50%;
        right: 1%;
        z-index: 1;
        transform: translateY(-50%) rotate(135deg); /* выравнила по оси и развернула стрелку вниз*/
        :hover {
          transform: translateY(-50%) rotate(-45deg); /* выравнила по оси и развернула стрелку вверх */
        }
      }
  `

export const UserAbbr = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 10px;
     width: 56px;
     height: 50px;
     border-radius: 5px;
     cursor: pointer;
     background-color: ${COLORS.primary2};
      span {
        font-family: 'Exo 2', sans-serif;
        color: ${COLORS.whiteContext};
        font-size: 16px;
        line-height: 20px;
        font-weight: 700;
      }
  `
