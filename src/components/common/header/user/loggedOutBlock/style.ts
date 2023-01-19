import styled from "styled-components";
import {COLORS} from "../../../../../styles";

export const IconUser = styled.div`

  height: 20px;
  width: 20px;
  position: relative;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border: 2px solid ${COLORS.secondary};
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 5px;
  }

  &:after {
    content: '';
    width: 20px;
    height: 5px;
    border: 2px solid ${COLORS.secondary};
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`