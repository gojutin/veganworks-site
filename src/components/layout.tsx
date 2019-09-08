import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    max-width: 100vw;
    font-family: 'Open Sans';
    color: #333;
    background: #111;
  }
`;

const Main = styled.div`
  margin: 0px;
  padding: 0px;
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      {children}
    </Main>
  );
};

export default Layout;
