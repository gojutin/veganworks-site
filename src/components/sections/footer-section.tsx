import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: -20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background: ${props => props.theme.colors.purple};
  color: white;
  text-align: center;
  font-family: Alice;
  padding: 20px;
`;

const Wave = styled.svg.attrs(() => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1440 320",
}))`
  background: white;

  path {
    fill: ${props => props.theme.colors.purple};
  }
`;

const FooterSection = () => {
  return (
    <>
      <Wave>
        <path
          fillOpacity="1"
          d="M0,256L80,266.7C160,277,320,299,480,282.7C640,267,800,213,960,197.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </Wave>
      <StyledFooter>
        <span>info@veganworks.com</span>
        <span>&reg; 2019 VeganWorks, Inc.</span>
      </StyledFooter>
    </>
  );
};

export { FooterSection };
