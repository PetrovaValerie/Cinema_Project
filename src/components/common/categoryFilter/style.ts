import styled from "styled-components";
import {COLORS} from "../../../styles";

export const FilterWrapper = styled.section`
  width: 25%;
  min-height: 750px;
  max-height: 760px;
  margin: 150px 120px 50px 0;
  background: ${COLORS.secondary};
  border-radius: 5px;
  `

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
   font-family: 'Exo 2', sans-serif;
   font-size: 16px;
   line-height: 20px;
   font-weight: 600;
   cursor: pointer;
   color: ${COLORS.lightContext};
    h2 {
      margin-top: 5%;
      font-size: 18px;
      color: ${COLORS.graphiteBg};
    }
  `

export const SearchFilterField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
  cursor: pointer;

  & label {
    font-size: 16px;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input, & select {
    width: 40%;
    height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid ${COLORS.graphiteBg};
    &:hover{
      cursor: pointer;
    }
    &:focus{
      cursor: auto;
    }
  }
  & select {
    color: ${COLORS.lightContext};
    background: ${COLORS.blackBg};
  }
  &:first-of-type{

    & div, & input {
      width: 91%;
    }
  }
  @media (max-width: 1050px) {
    margin: 5px;
  }
`

export const ApplyFilterBtn = styled.input`
  width: 200px;
  border-radius: 10px;
  height: 50px;
  cursor: pointer;
  margin: 30px 0 0;
  background:  ${COLORS.primary} !important;
  color: ${COLORS.whiteContext} !important;
  `