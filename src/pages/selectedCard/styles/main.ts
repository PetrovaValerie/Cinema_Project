import styled from "styled-components";
import {COLORS} from "../../../styles";

export const SelectedCardWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  padding-top: 10%;
  width: 100%;
  //height: auto;
  height: 100vh;
  min-height: 800px;
    `

export const SelectRow = styled.div`
  display: flex;
    `

export const SelectImgWrap = styled.div`
  padding: 0 0 1% 10%;
  width: 30%;
  @media (max-width: 950px) {
    margin: 0 auto;
    flex-direction: column;
  }
    `

export const SelectImg = styled.img`
  max-width: 220px;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    box-shadow: rgb(123, 97, 255) 0px 6px 12px -2px, rgb(138, 120, 224) 0px 3px 7px -3px;
  }
    `

export const SelectedDescr = styled.div`
  max-width: 60%;
  padding: 0 5% 5% 1%;
    `

export const SelectTitle = styled.h1`
  max-width: 500px;
  height: max-content;
  
  padding: 0 0 10px;
  font-family: 'Exo 2', sans-serif;
  font-size: 25px;
  line-height: 30px;
  font-weight: 600;
  cursor: pointer;
  color: ${COLORS.lightContext};
  :hover{
    text-decoration: underline;
  }
    `

export const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
    `

