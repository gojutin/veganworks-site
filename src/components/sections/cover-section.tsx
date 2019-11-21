import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import VeganWorksLogo from "../../svgs/veganworks-logo.svg";
import VeganWorksLogoSmall from "../../svgs/veganworks-logo-sm.svg";
import { motion } from "framer-motion";

// Components
import { CoverImage } from "../common/cover-image";
import { AmazonStoreButton } from "../common/amazon-store-button";

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledLogo = styled(motion.img)`
  max-width: 800px;
  width: 95%;
`;

const Tagline = styled(motion.h3)`
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
      <Wrapper>
        <StyledLogo
          src={logo}
          alt="VeganWorks Logo"
          initial={{ scale: 0.9, opacity: 0, x: 50 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        />

        <Tagline
          initial={{ scale: 0.9, opacity: 0, x: -50 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeInOut" }}
        >
          Delicious Vegan Snack Boxes
        </Tagline>
        <motion.div
          style={{ marginTop: "50px", width: "90%", textAlign: "center" }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          // eslint-disable-next-line @typescript-eslint/tslint/config
          transition={{
            duration: 0.25,
            easing: "easeOut",
            delay: 0.5,
            type: "spring",
            damping: 10,
          }}
        >
          <AmazonStoreButton
            title="Visit our Amazon Store"
            url="https://www.amazon.com/stores/VeganWorks/VeganWorks/page/E2CD3E05-F08E-470F-BD10-F668DA807157"
          />
        </motion.div>
      </Wrapper>
    </CoverImage>
  );
};

export { CoverSection };
