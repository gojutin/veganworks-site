import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background: #00cba9;
  color: #333;
  text-align: center;
  font-family: Alice;
  height: 70px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>info@veganworks.com</span>
      <span>&reg; 2019 VeganWorks, Inc.</span>
    </StyledFooter>
  );
};

export default Footer;
