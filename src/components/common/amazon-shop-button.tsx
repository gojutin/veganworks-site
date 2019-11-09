import React from "react";
import styled from "styled-components";
import AmazonLogo from "../../svgs/amazon-icon.svg";
import PurpleButton from "./purple-button";

const A = styled.a`
  text-decoration: none;
`;

type AmazonButtonProps = {
  url: string;
  isAvailable: boolean;
};

const AmazonButton: React.FC<AmazonButtonProps> = ({ url, isAvailable }) => {
  const animateSettings = {
    boxShadow: "0 14px 28px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.1)",
    scale: 1.02,
  };
  return (
    <A href={url} target="_blank" rel="noopener noreferrer">
      <PurpleButton whileHover={animateSettings} whileTap={animateSettings}>
        <img height={25} src={AmazonLogo} alt="Amazon Logo" />
        <span style={{ marginLeft: "10px" }}>
          {isAvailable ? "Shop Now!" : "View on Amazon"}
        </span>
      </PurpleButton>
    </A>
  );
};

export default AmazonButton;
