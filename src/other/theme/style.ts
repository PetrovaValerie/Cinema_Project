import styled from 'styled-components';
import {COLORS} from '../../styles';

export const CheckBoxWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1%;
`

export const IconWrap = styled.div<{strokes?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
  color: black;
  
  & svg:nth-child(n) {
    stroke: ${props => props.strokes ? `${COLORS.lightContext}` : `${COLORS.primary2}`};
  } 

  &:first-of-type {
    border-right: 1px solid ${COLORS.lightContext};
  }
`