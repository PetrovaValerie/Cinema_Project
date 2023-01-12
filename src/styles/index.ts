import {createGlobalStyle} from "styled-components";

export const COLORS = {
    // System Colors:
    primary: '#7B61FF',
    primary2: '#917CFF',
    secondary: '#80858B',
    // Background Colors:
    blackBg: '#000000',
    darkBg: '#242426',
    graphiteBg: '#323537',
    // Contextual Colors:
    errorContext: '#FF5154',
    lightContext: '#AFB2B6',
    whiteContext: '#FFFFFF',
    // Tertiary Colors:
    green: '#00A340',
    yellow: '#F3A608',
    orange: '#F45D2D',
};

export type styleProps = {
    background: string,
    color?: string,
}

export const GlobalStyle = createGlobalStyle<{ props: styleProps }>`

  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :focus, :active {
    outline: none;
  }

  a:focus, a:active {
    outline: none;
  }

  nav, footer, header, aside {
    display: block;
  }

  html, body {
    height: 100%;
    width: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  input, button, textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  Img {
    vertical-align: top;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  
  h3 {
    color: ${({props}) =>  `${COLORS.secondary}`}!important;
  }

  header,
  footer,
  aside,
  section,
  ul
  {
    background: ${({props}) => props.background };
  } 
  
  input
  {
    background: ${({props}) => props.background }!important;
    color: ${({props}) =>  `${COLORS.darkBg}`}!important;
    border: 1px solid ${COLORS.lightContext};
        :focus {
          background: ${COLORS.lightContext}!important;
        }
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  svg {
    fill: ${({props}) => props.color};
  }
  
  visually-hidden {
    display: none;
  }
    
    `