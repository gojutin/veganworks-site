import React from "react";
import styled from "styled-components";
import { Link } from "../common/link";
import FooterWave from "../../svgs/farm-animals.svg";
import { useTheme } from "../../styles";

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
        <span>
          <Link color={colors.secondary7} to="/contact">
            Contact Us
          </Link>
        </span>
        <span style={{ color: colors.secondary9 }}>
          &reg; 2019 VeganWorks, Inc.
        </span>
      </StyledFooter>
    </>
  );
};

export { FooterSection };
