import styled, {createGlobalStyle} from "styled-components";
import {COLORS} from "../../../styles";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
`
export const OverflowBodyStyle = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`