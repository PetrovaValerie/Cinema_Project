import styled from "styled-components";
import {COLORS} from "../../../styles";

export const FormContent = styled.div`
  width: 100%;
  min-height: 800px;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
    `

export const FormBox = styled.form`
  width: 50%;
  max-width: 500px;
  min-width: 350px;
  padding: 20px;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${COLORS.secondary};
  border-radius: 5px;
    `

export const FormName = styled.h1`
  font-family: 'Exo 2', sans-serif;
  font-size: 25px;
  line-height: 30px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  color: ${COLORS.whiteContext};
    `

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: ${COLORS.errorContext};
    `

export const SubmitBtn = styled.button`
  margin: 0 auto;
  height: 60px;
  width: 50%;
  background: ${COLORS.primary2};
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: ${COLORS.whiteContext};
  border-radius: 5px;
  &:hover {
    background: ${COLORS.primary};
  }
    `