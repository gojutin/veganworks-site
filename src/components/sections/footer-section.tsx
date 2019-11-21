import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import FooterWave from "../../svgs/farm-animals.svg";

const StyledFooter = styled.footer`
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background: #18cdb5;
  color: white;
  text-align: center;
  font-family: Alice;
  padding: 20px;
`;

const FooterSection = () => {
  return (
    <>
      <img src={FooterWave} alt="wave" />
      <StyledFooter>
        <span>
          <Link style={{ color: "white" }} to="contact">
            Contact Us
          </Link>
        </span>
        <span>&reg; 2019 VeganWorks, Inc.</span>
      </StyledFooter>
    </>
  );
};

export { FooterSection };
