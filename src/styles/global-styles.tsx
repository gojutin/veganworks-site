import { createGlobalStyle } from "styled-components";
import cssreset from "modern-css-reset";

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    max-width: 100vw;
    font-family: 'Open Sans';
    color: #333;
    background: #111;
  }
  ${cssreset};
`;

export { GlobalStyles };
