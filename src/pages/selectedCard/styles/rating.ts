import styled from "styled-components";
import {COLORS} from "../../../styles";

export const RatingInfo = styled.div`
  display: flex;
    `

export const RatingItem = styled.div<{ colorChange?: string }>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 15px;
  border-radius: 5px;
  height: 100%;
  
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${COLORS.lightContext};

  &:hover {
    cursor: pointer;
  }

  & p:first-of-type {
    padding: 4px 5px 4px 10px;
    border: 1px solid ${({colorChange}) => colorChange};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  & p:last-of-type {
    background: ${({colorChange}) => colorChange};
    padding: 5px 10px;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    color: white;
  }

  &:hover p {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:hover span {
    display: block;
    border: 1px solid ${({colorChange}) => colorChange};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
    `

export const RatingNmbr = styled.span`
  display: none;
  position: absolute;
  top: 34px;
  //bottom: -16%;
  left: 0;
  padding: 5px 10px;
  width: max-content;
    `