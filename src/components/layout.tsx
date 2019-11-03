import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../styles";

const Main = styled.div`
  margin: 0px;
  padding: 0px;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <GlobalStyles />
        {children}
      </Main>
    </ThemeProvider>
  );
};

export default Layout;
