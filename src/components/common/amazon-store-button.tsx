import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AmazonLogo from "../../svgs/amazon-icon.svg";
import PurpleButton from "./purple-button";

const Button = styled(PurpleButton)`
  background: rgba(71, 138, 245, 0.3);
`;

const A = styled.a`
  text-decoration: none;
`;

type AmazonButtonProps = {
  url: string;
  title?: string;
};

const AmazonButton: React.FC<AmazonButtonProps> = ({ url }) => {
  const animateSettings = {
    boxShadow: "0 14px 28px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.1)",
    scale: 1.03,
  };
  return (
    <A href={url} target="_blank" rel="noopener noreferrer">
      <Button whileHover={animateSettings} whileTap={animateSettings}>
        <img src={AmazonLogo} height="30px" alt="Amazon Logo" />

        <span style={{ margin: "5px 0px 5px 10px" }}>
          View our Amazon store
        </span>
      </Button>
    </A>
  );
};

export default AmazonButton;
