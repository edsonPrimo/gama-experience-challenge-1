import { createGlobalStyle } from "styled-components";
import background from './assets/images/Pimentas/home-background-img.jpg'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width:100%;
    height:100%;
    background: url(${background});
    font-size: 16px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle
