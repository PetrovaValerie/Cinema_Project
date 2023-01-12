import styled from "styled-components";
import {COLORS} from "../../../styles";

export const FooterWrap = styled.footer`
  width: 100%;
  padding: 10% 5% 2%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  li {
    margin: 10% 0 0 0 !important;
    max-height: 30px;
    background: transparent;

    :hover {
      background: transparent;
    }
  }
`
export const FooterRow = styled.ul`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Rights = styled.li`
    font-family: 'Exo 2', sans-serif;
    color: ${COLORS.lightContext};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
      @media (max-width: 1050px) {
        display: none;
      }
`