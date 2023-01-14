import styled from "styled-components";
import {COLORS} from "../../../../styles";

export const InputFormBlock = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
`

export const Input = styled.input<{ error?: string }>`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 8px;
  border-radius: 10px;
  // border: 2px solid ($){({error}) => error ? 'red' : 'grey'};
  //color: black;
  
  font-family: 'Exo 2', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;
  color: ${COLORS.whiteContext};

`
export const ErrorMessageBlock = styled.div`
  display: flex;
  font-size: 10px;
  margin-top: 5px;
  width: 100%;
  height: 20px;
  padding: 0 5px;

  & span {
    color: red;
  }
`