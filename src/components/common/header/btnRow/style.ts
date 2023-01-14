import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {COLORS} from "../../../../styles";

export const HeaderBtnRow = styled.ul`
  width: 20%;
  //min-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 100px;
    padding: 1% 5% 1% 1%;
  }
`

export const NavBtn = styled.li`
  margin-left: 4%;
  padding: 15px 0;
  height: 50px;
  min-width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.primary};
  border-radius: 5px;

  font-family: 'Exo 2', sans-serif;
  color: ${COLORS.whiteContext};
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background-color: ${COLORS.primary2};
  }

  :nth-child(1) {
    margin-left: 10%;
    background-color: transparent;
    }
  }


  @media (max-width: 1050px) {
    :nth-child(3n) {
      display: none;
    }
    padding: 10px 0;
    height: 40px;
  }
`
