import React from "react";
import styled from "styled-components";
import { Link } from "../common/link";
import FooterWave from "../../svgs/farm-animals.svg";
import { useTheme } from "../../styles";
import twitter from "../../svgs/twitter.svg";
import ig from "../../svgs/ig.svg";

const StyledFooter = styled.footer`
  margin-top: -60px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: ${({ theme }) =>
    theme.screens.sm ? "flex-start" : "space-evenly"};
  background: #18CEB5;
  color: white;
  font-family: Alice;
  padding: 20px 40px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-align: left; 
  min-width: 300px;
  padding: 4px 0px;
`;

const socialLinks = [
  {
    title: "@VeganWorksHQ",
    href: "https://twitter.com/veganworkshq",
    icon: twitter,
  },
  {
    title: "@VeganWorksHQ",
    href: "https://instagram.com/veganworkshq",
    icon: ig,
  },
];

const navLinks = [

  { title: "Contact Us", to: "/contact" },
  { title: "FAQs", to: "/faqs" },
  { title: "Privacy Policy", to: "/privacy" },
  { title: "Terms Of Use", to: "/terms" },
];

const StyledDiv = styled.div`
  color: black;
  width: ${({ theme }) => (theme.screens.sm ? "100%" : "auto")};
`;

const FollowUs = styled.h3`
  padding: 10px 0px;
  font-size: 20px;
`;

const FooterSection = () => {
  const { colors } = useTheme();

  const renderFooterLinks = (values) => values.map(item => {
    const maybeRenderIcon = item.icon && (
      <img
        style={{ marginRight: "10px" }}
        src={item.icon}
        width={30}
        alt={item.title}
      />
    );
    return (
      <StyledLink
        key={item.title + (item.href || item.to)}
        color={colors.primary8}
        to={item.to || null}
        href={item.href || null}
      >
        <span>{maybeRenderIcon}</span>

        {item.title}
      </StyledLink>
    );
  });
  return (
    <>
      <img src={FooterWave} alt="wave" />
      <StyledFooter>
      <div>{renderFooterLinks(navLinks)}</div>
      <div>
        <FollowUs>Follow Us</FollowUs>
        {renderFooterLinks(socialLinks)}
        <br />
      </div>
     
    
        <StyledDiv>&reg; 2019 VeganWorks, Inc.</StyledDiv>
      </StyledFooter>
    </>
  );
};

export { FooterSection };
