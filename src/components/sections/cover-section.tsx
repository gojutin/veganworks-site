import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import VeganWorksLogo from "../../svgs/veganworks-logo.svg";
import VeganWorksLogoSmall from "../../svgs/veganworks-logo-sm.svg";
import { motion } from "framer-motion";

// Components
import { CoverImage } from "../common/cover-image";
import { AmazonStoreButton } from "../common/amazon-store-button";

const MotionWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledLogo = styled.img`
  max-width: 800px;
  width: 95%;
`;

const Tagline = styled.h3`
  font-size: ${p => (p.theme.screens.sm ? "1.6rem" : "2.3rem")};
  color: ${({ theme }) => theme.colors.secondary2};
  font-family: ${props => props.theme.font.cursive};
  text-align: center;
`;

const CoverSection: React.FC = () => {
  const isSmall = useTheme().screens.sm;
  const logo = isSmall ? VeganWorksLogoSmall : VeganWorksLogo;
  return (
    <CoverImage>
      <MotionWrapper
        initial={{ scale: 0.9, opacity: 0, x: 20 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <StyledLogo src={logo} alt="VeganWorks Logo" />

        <Tagline>Delicious Vegan Snack Boxes</Tagline>
        <div style={{ marginTop: "50px", width: "90%", textAlign: "center" }}>
          <AmazonStoreButton
            title="Visit our Amazon Store"
            url="https://www.amazon.com/stores/VeganWorks/VeganWorks/page/E2CD3E05-F08E-470F-BD10-F668DA807157"
          />
        </div>
      </MotionWrapper>
    </CoverImage>
  );
};

export { CoverSection };
