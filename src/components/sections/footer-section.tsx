import React from "react";
import styled from "styled-components";
import { Link } from "../common/link";
import FooterWave from "../../svgs/farm-animals.svg";
import { useTheme } from "../../styles";
// import twitter from "../../svgs/twitter.svg";

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

const footerLinks = [
  { title: "Contact Us", to: "/contact" },
  { title: "FAQs", to: "/faqs" },
  { title: "@VeganWorksHQ", href: "https://twitter.com/veganworkshq" },
];

const FooterSection = () => {
  const { colors } = useTheme();

  const renderFooterLinks = footerLinks.map(item => {
    return (
      <Link
        key={item.title}
        color={colors.secondary7}
        to={item.to || null}
        href={item.href || null}
        style={{ paddingBottom: "10px", textAlign: "left" }}
      >
        {item.title}
      </Link>
    );
  });
  return (
    <>
      <img src={FooterWave} alt="wave" />
      <StyledFooter>
        <div>{renderFooterLinks}</div>
        <span style={{ color: "black" }}>&reg; 2019 VeganWorks, Inc.</span>
      </StyledFooter>
    </>
  );
};

export { FooterSection };
