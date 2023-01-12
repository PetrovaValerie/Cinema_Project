import styled from "styled-components";
import {COLORS} from "../../styles";

export const SimWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px;
  padding: 0 50px;
    `

export const SimContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    `

export const Simcontent = styled.div`
  display: flex;
  margin-left: 8%;
  
  align-items: center;
  min-height: 50px;
  font-family: 'Exo 2', sans-serif;
  font-size: 25px;
  line-height: 30px;
  font-weight: 600;
  cursor: pointer;
  color: ${COLORS.whiteContext};
  p {
    font-size: 20px;
    margin-right: 10px;
  }
  span {
    :hover {
      text-decoration: underline;
    }
  }
    `

