import React from "react";
import styled from "styled-components";
import { GlobalStyles, ThemeProvider } from "../../styles";
import { SideNav } from "./side-nav";
import MouseParticles from "react-mouse-particles";

const Main = styled.div<{ bg?: string }>`
  margin: 0px;
  padding: 0px;
  background: ${props => props.bg};
  min-height: 100vh;
`;

const items = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "FAQS",
    link: "/faqs",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const Layout: React.FC<{ bg?: string; menu?: boolean }> = ({
  children,
  bg,
  menu = true,
}) => {
  return (
    <ThemeProvider>
      <MouseParticles g={1} color="random" cull="col,image-wrapper" />
      <GlobalStyles />
      {menu && <SideNav items={items} />}

      <Main bg={bg}>{children}</Main>
    </ThemeProvider>
  );
};

export { Layout };
