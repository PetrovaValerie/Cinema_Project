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
  font-family: 'Exo 2', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;
  color: ${COLORS.whiteContext};

`
export const ErrorMessageBlock = styled.div`
  display: flex;
  font-family: 'Exo 2', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin-top: 2px;
  width: 100%;
  min-height: 20px;
  height: max-content;
  padding: 0 5px;

  & span {
    color: #9a1c1c;
  }
`