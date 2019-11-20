import { createGlobalStyle } from "styled-components";
import cssreset from "modern-css-reset";

const GlobalStyles = createGlobalStyle`
  @import url("node_modules/modern-css-reset/dist/reset.min.css");
  body {
    padding: 0;
    margin: 0;
    max-width: 100vw;
    font-family: Alice, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #333;
    background: #111;
    letter-spacing: .5px;
  }
  ${cssreset};
`;

export { GlobalStyles };
