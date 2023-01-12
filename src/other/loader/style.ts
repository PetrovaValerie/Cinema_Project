import styled from 'styled-components';
import {COLORS} from '../../styles';


export const Spinner = styled.span`
  display: block;
  
  position: absolute;
  top: 50%;
  left: 50%;
  
  margin: 0 auto;
  border: 3px solid ${COLORS.primary2};
  width: 70px;
  height: 70px;
  border-radius: 100%;
  border-right-color: transparent;
  animation: anim 1.5s linear infinite;
}
    @keyframes anim {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
`

