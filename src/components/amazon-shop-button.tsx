import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AmazonLogo from "../svgs/amazon-icon.svg";

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  min-width: 200px;
  background: ${props => props.theme.colors.purple};
  font-size: 20px;
  margin: 10px auto;
  cursor: pointer;
  box-shadow: none;
  padding: 10px 18px;
  outline: none;
  color: white;
  font-weight: 600;
`;

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
      <Button whileHover={animateSettings} whileTap={animateSettings}>
        <img height={25} src={AmazonLogo} alt="Amazon Logo" />
        <span style={{ marginLeft: "10px" }}>
          {isAvailable ? "Shop Now!" : "View on Amazon"}
        </span>
      </Button>
    </A>
  );
};

export default AmazonButton;
