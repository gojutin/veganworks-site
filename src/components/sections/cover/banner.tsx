import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledBanner = styled(motion.aside).attrs(() => ({
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

export const Banner = () => {
  const scrollToNewsletter = () => {
    document.getElementById("newsletter").scrollIntoView();
  };
  return (
    <StyledBanner>
      <div className="banner-container">
        We are working on a new snack box!
        <BannerButton onClick={scrollToNewsletter}>
          Sign up for our newsletter
        </BannerButton>
        to be the first to know when it&apos;s available.
      </div>
    </StyledBanner>
  );
};
