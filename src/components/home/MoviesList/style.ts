import styled from 'styled-components';
import {COLORS} from '../../../styles';

export const MoviesGrid = styled.div`
  margin: 0;
  padding: 1em;
    display: grid;
    width: 100%;
    //height: 100vh;
    height: 700px;
    //grid-template-areas:
    //  "card card card card card"
    //  "card card card card card";  
  grid-template-areas:
      "card card"
      "card card";
    //grid-template-columns: repeat(5, 1fr);
    //grid-template-rows: repeat(2, auto);    
  // grid-template-columns: repeat(2, 1fr);
    //grid-template-rows: repeat(2, auto);
  `
