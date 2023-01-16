import styled from "styled-components";
import {COLORS} from "../../styles";

export const SimWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
    `

export const SimContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    `

export const Simcontent = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;
  color: ${COLORS.lightContext};
  p {
    margin-right: 10px;
  }
  span {
    :hover {
      text-decoration: underline;
    }
  }
    `

