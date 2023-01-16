import styled from "styled-components";
import {COLORS} from "../../../styles";

export const SelectParams = styled.div`
  width: 70%;
    `

export const InfoItem = styled.div`
  padding: 10px 0px 0px;
  display: flex;
  justify-content: space-between;
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: ${COLORS.lightContext};
  cursor: pointer;
  & span {
    display: block;
    padding-right: 10px;
    width: max-content;
    white-space: nowrap;
    :hover{
      text-decoration: underline;
    }
  }
  :nth-child(1),
  :nth-child(5n)
  {
    padding: 10% 0 0 0;
  }
    `