import React from "react";
import styled from "styled-components";
import { Link } from "../common/link";
import FooterWave from "../../svgs/farm-animals.svg";
import { useTheme } from "../../styles";
import twitter from "../../svgs/twitter.svg";

const StyledFooter = styled.footer`
  margin-top: -60px;
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
  const { colors } = useTheme();
  return (
    <>
      <img src={FooterWave} alt="wave" />
      <StyledFooter>
        <Link color={colors.secondary7} href="https://twitter.com/veganworkshq">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={twitter} height={30} alt="Twitter Logo" />
            <span>@veganworkshq</span>
          </div>
        </Link>

        <Link color={colors.secondary7} to="/contact">
          Contact Us
        </Link>

        <span style={{ color: "darkgreen" }}>&reg; 2019 VeganWorks, Inc.</span>
      </StyledFooter>
    </>
  );
};

export { FooterSection };
