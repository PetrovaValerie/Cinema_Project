import styled from 'styled-components';
import {COLORS} from "../../../../../styles";

export const RgstrBtnWrap = styled.button<{ open: boolean }>`
  padding: 10px;
  width: 10%;
  min-width: 56px;
  height: 50px;
  border-radius: 5px;
  margin: 1% 4% 1% 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  right: 0;
  background-color: ${COLORS.primary};

  :hover {
    background-color: ${COLORS.primary2};
  }

  p {
    padding: 0 20px;
    font-family: 'Exo 2', sans-serif;
    color: ${COLORS.whiteContext};
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
  }

  @media (max-width: 1050px) {
    display: none;
  }
`

