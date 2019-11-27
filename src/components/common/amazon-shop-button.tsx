import React from "react";
import AmazonLogo from "../../svgs/amazon-icon.svg";
import { Button } from "./button";
import { Link } from "./link";

interface AmazonShopButtonProps {
  url: string;
  isAvailable: boolean;
}

const AmazonShopButton: React.FC<AmazonShopButtonProps> = ({
  url,
  isAvailable,
}) => {
  return (
    <Link href={url} style={{ textDecoration: "none" }}>
      <Button style={{ minWidth: "250px" }}>
        <img height={25} src={AmazonLogo} alt="Amazon Logo" />
        <span style={{ marginLeft: "10px" }}>
          {isAvailable ? "Shop Now!" : "View on Amazon"}
        </span>
      </Button>
    </Link>
  );
};

export { AmazonShopButton };
