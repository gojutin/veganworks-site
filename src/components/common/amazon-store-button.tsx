import React from "react";
import styled from "styled-components";
import AmazonLogo from "../../svgs/amazon-icon.svg";
import { Button } from "./button";
import { Anchor } from "./anchor";

const StyledButton = styled(Button)`
  background: rgba(71, 138, 245, 0.3);
  border: 2px solid white;
`;

type AmazonStoreButtonProps = {
  url: string;
  title?: string;
};

const AmazonStoreButton: React.FC<AmazonStoreButtonProps> = ({ url }) => {
  const animateSettings = {
    boxShadow: "0 14px 28px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.1)",
    scale: 1.03,
  };
  return (
    <Anchor href={url}>
      <StyledButton whileHover={animateSettings} whileTap={animateSettings}>
        <img src={AmazonLogo} height="30px" alt="Amazon Logo" />
        <span style={{ margin: "5px 0px 5px 10px" }}>
          Visit Our Amazon Store
        </span>
      </StyledButton>
    </Anchor>
  );
};

export { AmazonStoreButton };
