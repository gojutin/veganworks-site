import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  color: white;
  text-align: center;
  font-family: Alice;
  height: 50px;
`;

const Footer = () => {
  return <StyledFooter>&reg; 2019 VeganWorks, Inc.</StyledFooter>;
};

export default Footer;
