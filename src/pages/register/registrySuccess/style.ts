import styled from "styled-components";
import {COLORS} from "../../../styles";

export const SuccessContainer = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;

  :nth-child(n) {
    position: absolute;
    top: 35%;
    font-family: 'Exo 2', sans-serif;
    color: ${COLORS.secondary};
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`