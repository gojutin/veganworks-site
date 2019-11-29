import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { useBrandLogos } from "../../queries/useBrandLogos";
import { motion } from "framer-motion";

// Components
import { Section } from "../common/section";
import { BackgroundSlider } from "../common/background-slider";

const Wrapper = styled(motion.div)`
  white-space: nowrap;
  overflow: hidden;
  min-height: 200px;

  div {
    display: inline-block;
    padding: 0 2.2rem;
    vertical-align: middle;
    opacity: 0.8;
    outline: none;
    cursor: default;
    transition: all 0.25s ease;
    overflow: hidden;
    /* filter: grayscale(0%); */
    :hover {
      opacity: 1;
      transform: scale(1.1);
      /* filter: grayscale(0%); */
    }
  }
`;

const StyledBrandLogo = styled(Img)`
  margin: 20px 30px;
  width: 140px;
  text-align: center;
  padding: 10px 20px;
`;

const BrandLogo = React.memo(StyledBrandLogo);

const FavoriteBrandsSection: React.FC = () => {
  const data = useBrandLogos();
  const [isPaused, setIsPaused] = useState(false);
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const renderBrandLogos = [...data.allFile.edges, ...data.allFile.edges].map(
    ({ node }, i) => {
      return (
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          key={i}
        >
          <BrandLogo fixed={node.childImageSharp.fixed} alt="Vendor Image" />
        </span>
      );
    }
  );

  return (
    <Section
      bg="linear-gradient(#fff, #fff)"
      title="Bringing You Our Favorite Brands"
    >
      <br />
      <br />
      <BackgroundSlider duration={40} paused={isPaused}>
        <Wrapper>{renderBrandLogos}</Wrapper>
      </BackgroundSlider>
    </Section>
  );
};

export { FavoriteBrandsSection };
