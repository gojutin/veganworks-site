/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
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
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  return (
    <Main>
      <GlobalStyle />
      {children}
    </Main>
  );
};

export default Layout;
