import styled from 'styled-components';
import {COLORS} from '../../../styles';

export const SearchBar = styled.input`
    margin: 1% 10% 1% 0;
    padding: 20px 42px;
    width: 50%;
    height: auto;
    background: ${COLORS.graphiteBg};
    border-radius: 15px;
    cursor: pointer;
    position: relative;
      ::placeholder {
        font-family: 'Exo 2', sans-serif;
        color: ${COLORS.secondary};
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
      }
    //::after {
    //  position: absolute;
    //  content: '';
    //  width: 10px;
    //  height: 10px;
    //  border-top: 2px solid #ccc;
    //  border-right: 2px solid #ccc;
    //  position: absolute;
    //  top: 50%;
    //  right: 20px;
    //  z-index: 1;
    //}
  `
