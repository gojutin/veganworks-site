import React from "react";
import styled from "styled-components";
import { GlobalStyles, ThemeProvider } from "../../styles";

const Main = styled.div<{ bg?: string }>`
  margin: 0px;
  padding: 0px;
  background: ${props => props.bg};
  min-height: 100vh;
`;

const Layout: React.FC<{ bg?: string }> = ({ children, bg }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Main bg={bg}>{children}</Main>
    </ThemeProvider>
  );
};

export { Layout };
