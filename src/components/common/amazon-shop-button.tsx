import React from "react";
import AmazonLogo from "../../svgs/amazon-icon.svg";
import { Button } from "./button";
import { Anchor } from "./anchor";

interface AmazonShopButtonProps {
  url: string;
  isAvailable: boolean;
}

const AmazonShopButton: React.FC<AmazonShopButtonProps> = ({
  url,
  isAvailable,
}) => {
  return (
    <Anchor href={url} style={{ display: "block" }}>
      <Button style={{ minWidth: "250px" }}>
        <img height={25} src={AmazonLogo} alt="Amazon Logo" />
        <span style={{ marginLeft: "10px" }}>
          {isAvailable ? "Shop Now!" : "View on Amazon"}
        </span>
      </Button>
    </Anchor>
  );
};

export { AmazonShopButton };
