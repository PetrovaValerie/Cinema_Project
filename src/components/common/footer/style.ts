import styled from "styled-components";
import {COLORS} from "../../../styles";

export const FooterWrap = styled.footer`
  width: 100%;
  height: 80px;
  padding: 1% 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  span {
    align-items: flex-end;
    display: flex;
  }

  div {
    max-height: 30px;
    background: transparent;

    :hover {
      background: transparent;
    }

    img {
      max-width: 100px;
    }
  }
`

export const Rights = styled.span`
  height: 80%;
  
  font-family: 'Exo 2', sans-serif;
  color: ${COLORS.lightContext};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  
  @media (max-width: 1050px) {
    display: none;
  }
`

export const FooterHomeBtn = styled.div`
margin-left: 4%;
padding: 0 0 15px;
height: 50px;
min-width: 100px;
  img {
    max-width: 80px;
  }
`

