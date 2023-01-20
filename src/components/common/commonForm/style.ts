import styled from "styled-components";
import {COLORS} from "../../../styles";

export const FormContent = styled.div`
  width: 100%;
  min-height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
    `

export const FormBox = styled.form`
  width: 50%;
  max-width: 340px;
  min-width: 330px;
  position: relative;
  padding: 10px;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${COLORS.secondary};
  border-radius: 5px;
    `

export const FormName = styled.h1`
  margin: 3% auto;
  font-family: 'Exo 2', sans-serif;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  color: ${COLORS.whiteContext};
    `

export const ErrorMessage = styled.p`
  font-family: 'Exo 2', sans-serif;
  font-size: 14px;
  position: absolute;
  padding: 10px 0;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  color: ${COLORS.errorContext};
    `

export const SubmitBtn = styled.button`
  margin: 0 auto;
  height: 50px;
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

export const FormQuery = styled.p`
  position: absolute;
  bottom: -45px;
  left: 12%;
  color: ${COLORS.lightContext};
  font-family: 'Exo 2', sans-serif;
  
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;
  span {
    padding: 3px;
      :hover {
        text-decoration: underline;
      }
  }
    `