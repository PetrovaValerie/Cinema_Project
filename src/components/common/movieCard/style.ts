import styled from 'styled-components';
import {COLORS} from '../../../styles';

export const CardItem = styled.div`
  font-family: 'Exo 2', sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin: 20px;
  cursor: pointer;

  article {
    position: relative;
    width: 200px;
    height: 320px;
    overflow: hidden;
  }

  h3 {
    color: ${COLORS.whiteContext};
    margin-top: 24px;
  }
`

export const CardRating = styled.div<{rating:number}> `
    position: absolute;
    top: 2%;
    left: 2%;
    z-index: 2;
    width: 39px;
    height: 28px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    color: ${COLORS.whiteContext};
    font-weight: 600;
      background: ${(props) => {
        if (Number(props.rating) > 7) {
          return `${COLORS.green}`;
        } else if (Number(props.rating) > 5) {
          return `${COLORS.yellow}`;
        } else {
          return `${COLORS.orange}`;
        }
      }};
    :hover {
      box-shadow: rgb(67, 213, 12) 10px 30px 90px;
    }
      display: ${(props) => {
        if (Number(props.rating) > 0) {
          return 'flex';
        } else {return 'none'}
      }};
`


export const Img = styled.div<{ image: string }>`
  width: 150px;
  height: 70%;
  border-radius: 20px;
  background-image: url(${({image}) => image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;

  :hover {
    box-shadow: rgb(123, 97, 255) 0px 6px 12px -2px, rgb(138, 120, 224) 0px 3px 7px -3px;
  }
`

export const CategoryList = styled.ul`
  margin: 5px 0px 0px;
  font-size: 12px;

  li {
    color: ${COLORS.lightContext};
  }
`

export const Genre = styled.div`
  position: absolute;
  bottom: 27%;
  right: 20%;
  z-index: 2;
  width: 40%;
  height: 28px;
  background-color: ${COLORS.green};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.whiteContext};
  font-weight: 600;
}
`

export const Year = styled.div<{ year: number | string }>`
  position: absolute;
  bottom: 27%;
  left: 2%;
  z-index: 2;
  width: 20%;
  height: 20px;
  background-color: ${COLORS.primary2};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  color: ${COLORS.whiteContext};
  font-weight: 600;
  display: ${(props) => {
    if (props.year > 0) {
      return 'flex';
    } else {return 'none'}
  }};
}
`

