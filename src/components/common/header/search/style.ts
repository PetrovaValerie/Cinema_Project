import styled from 'styled-components';
import {COLORS} from '../../../../styles';

export const SearchWrap = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1050px) {
    //width: 100%;
  }
`

export const SearchBar = styled.input`
  margin: 0 auto;
  padding: 20px 42px;
  width: 80%;
  height: auto;
  background: ${COLORS.graphiteBg};
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  color: ${COLORS.whiteContext};
  font-family: 'Exo 2', sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  
  :focus {
    background: ${COLORS.lightContext};
  }

  ::placeholder {
    font-family: 'Exo 2', sans-serif;
    color: ${COLORS.secondary};
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }

`

export const SearchIcon = styled.div`
  position: absolute;
  bottom: 25%;
  right: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  color: ${COLORS.lightContext};
`
