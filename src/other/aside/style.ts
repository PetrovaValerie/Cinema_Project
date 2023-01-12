import styled from 'styled-components';
import {COLORS} from '../../styles';


export const Container = styled.div`
  width: 100%;
  display: flex;
  `

export const AsideWrapper = styled.aside`
    margin: 0;
    padding: 0 62px 40px;
    width: 25%;
    height: 100vh;
    //min-height: 1162px;
  
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        margin: 40px 0;
        width: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      ul > li > a {
        display: flex;
        align-items: center;
        font-family: 'Exo 2', sans-serif;
        color: ${COLORS.secondary};
        font-size: 18px;
        line-height: 24px;
        font-weight: 600;
        p {
          margin: 0 0 0 10px;
        } 
        :hover {
          color: ${COLORS.primary};
        }
    }    
  `
