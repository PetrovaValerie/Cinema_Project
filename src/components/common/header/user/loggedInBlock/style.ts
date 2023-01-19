import styled from 'styled-components';
import {COLORS} from '../../../../../styles';

export const UserWrap = styled.div`
     width: 10%;
     margin: 0 4% 0 0;
     height: 60px;
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
        color: ${COLORS.primary};
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
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
