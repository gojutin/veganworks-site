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
  align-items: flex-end;
  justify-content: ${({ theme }) =>
    theme.screens.sm ? "flex-start" : "space-evenly"};
  background: #18cdb5;
  color: white;
  font-family: Alice;
  padding: 20px 40px;
`;

const footerLinks = [
  { title: "@VeganWorksHQ", href: "https://twitter.com/veganworkshq" },
  { title: "Contact Us", to: "/contact" },
  { title: "FAQs", to: "/faqs" },
  { title: "Privacy Policy", to: "/privacy" },
  { title: "Terms Of Use", to: "/terms" },
];

const StyledDiv = styled.div`
  color: black;
  width: ${({ theme }) => (theme.screens.sm ? "100%" : "auto")};
`;

const FooterSection = () => {
  const { colors } = useTheme();

  const renderFooterLinks = footerLinks.map(item => {
    return (
      <Link
        key={item.title}
        color={colors.secondary7}
        to={item.to || null}
        href={item.href || null}
        style={{ marginBottom: "10px", textAlign: "left" }}
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
        <StyledDiv>&reg; 2019 VeganWorks, Inc.</StyledDiv>
      </StyledFooter>
    </>
  );
};

export { FooterSection };
