import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import VeganWorksLogo from "../../svgs/veganworks-logo.svg";
import VeganWorksLogoSmall from "../../svgs/veganworks-logo-sm.svg";
import { motion } from "framer-motion";

// Components
import { CoverImage } from "../common/main-cover";
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
  color: ${({ theme }) => theme.colors.secondary1};
  font-family: ${props => props.theme.font.cursive};
  text-align: center;
`;

const Banner = styled(motion.aside).attrs(() => ({
  initial: { y: -60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay: 2 },
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 26, 0.8);
  color: white;
  text-align: center;
  padding: 10px;

  .banner-container {
    max-width: 75%;
    margin: 0 auto;
  }
`;

const BannerButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary4};
  cursor: pointer;
  outline: none;
  padding: 0px 5px;
  :hover {
    text-decoration: underline;
  }
`;

const CoverSection: React.FC = () => {
  const scrollToNewsletter = () => {
    document.getElementById("newsletter").scrollIntoView();
  };
  const isSmall = useTheme().screens.sm;
  const logo = isSmall ? VeganWorksLogoSmall : VeganWorksLogo;
  return (
    <CoverImage>
      <Banner>
        <div className="banner-container">
          We are working on a new snack box!
          <BannerButton onClick={scrollToNewsletter}>
            Sign up for our newsletter
          </BannerButton>
          to be the first to know when it&apos;s available.
        </div>
      </Banner>
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
