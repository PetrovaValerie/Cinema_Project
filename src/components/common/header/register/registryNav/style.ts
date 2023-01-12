import styled from 'styled-components';
import {COLORS} from "../../../../../styles";

export const Ul = styled.ul<{ open: boolean }>`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  list-style-type: none;
  display: ${props => props.open ? 'block' : 'none'};
  flex-direction: column;
  transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.4s ease-in-out;
  flex-flow: row nowrap;
  background: ${COLORS.whiteContext};
  border-radius: 0 0 5px 5px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
  }
`

export const NavlistItem = styled.li`
  position: relative;
  top: 0;
  right: 0;
  margin: 0;
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 100;
  background-color: transparent;

  font-family: 'Exo 2', sans-serif;
  color: ${COLORS.primary};
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;


  border-bottom: 1px solid ${COLORS.lightContext};

  :first-child {
    //margin: 0 0 10px;
  }

  :nth-child(2) {
    //margin-top: 5px;
  }

  :nth-child(4) {
    margin-top: 100%;
  }

  :last-child {
    // background-color: {COLORS.lightContext};
    background-color: ${COLORS.whiteContext};
    border-radius: 0 0 5px 5px;

  }

  a {
    text-decoration: none;
    color: ${COLORS.primary};
  }

  :hover {
    color: ${COLORS.primary2};
    background: ${COLORS.lightContext};
  }
  
`