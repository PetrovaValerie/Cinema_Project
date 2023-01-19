import styled from "styled-components";
import {COLORS} from "../../../styles";

export const SuccessContainer = styled.section`
  width: 100%;
  height: 400px;
  margin: 5% auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

export const SuccessTxt = styled.p`
    margin: 1% auto 0;
    font-family: 'Exo 2', sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: ${COLORS.lightContext};
    cursor: pointer;
      :last-of-type {
        margin: 5% auto 0;
        font-size: 12px;
        :hover {
          text-decoration: underline;
        }
      }
`