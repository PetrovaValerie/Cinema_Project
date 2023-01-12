import styled from "styled-components";
import {COLORS} from "../../styles";


export const SelectedCardWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //align-items: flex-start;
  margin: 0 auto;
  padding-top: 10%;
  width: 100%;
  //height: auto;
  height: 100vh;
  min-height: 800px;
  //position: relative;
  //height: max-content;
    `

export const SelectRow = styled.div`
  display: flex;
    `

export const SelectImgWrap = styled.div`
  padding: 0 0 5% 15%;
  max-width: 400px;
  //width: 70%;
  @media (max-width: 950px) {
    margin: 0 auto;
    flex-direction: column;
  }
    `

export const SelectImg = styled.img`
  width: 100%;
  cursor: pointer;
  :hover {
    box-shadow: rgb(123, 97, 255) 0px 6px 12px -2px, rgb(138, 120, 224) 0px 3px 7px -3px;
  }
    `

export const SelectTitle = styled.h1`
  margin-left: 15px;
  padding: 0 10px 10px;
  font-family: 'Exo 2', sans-serif;
  font-size: 25px;
  line-height: 30px;
  font-weight: 600;
  cursor: pointer;
  color: ${COLORS.whiteContext};
  :hover{
    text-decoration: underline;
  }
    `

export const SelectedDescr = styled.div`
  display: flex;
  flex-direction: column;
    `

export const SelectInfoList = styled.ul`
  margin-left: 10px;
    `

export const InfoItem = styled.li`
  margin-left: 15px;
  min-width: 200px;
  padding: 10px 10px 0px 0px;
  display: flex;
  justify-content: space-between;
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: ${COLORS.lightContext};
  cursor: pointer;
  list-style-type: disc;
  & span {
    display: block;
    padding-right: 10px;
    width: max-content;
    white-space: nowrap;
    color: ${COLORS.whiteContext};
    :hover{
      text-decoration: underline;
    }
  }
  :nth-child(5n) {
    padding: 15% 0 0 0;
  }
    `

export const SelectPlot = styled.p`
  margin-left: 15%;
  p {
    max-width: 70%;
    font-family: 'Exo 2', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${COLORS.whiteContext};
    cursor: pointer;
      :first-of-type {
        margin-bottom: 10px;
      }
  }
    `