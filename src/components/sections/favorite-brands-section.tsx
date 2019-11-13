import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import Section from "../common/section";
import { BackgroundSlider } from "../common/background-slider";
import { useBrandLogos } from "../../queries/useBrandLogos";

const Wrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;

  div {
    display: inline-block;
    padding: 0 2.2rem;
    vertical-align: middle;
    opacity: 0.8;
    outline: none;
    cursor: default;
    transition: all 0.2s ease;
    overflow: hidden;
    filter: grayscale(100%);
    :hover {
      opacity: 1;
      transform: scale(1.2);
      filter: grayscale(0%);
    }
  }
`;

const BrandLogo = styled(Img)`
  margin: 20px 40px;
  width: 140px;
  text-align: center;
  padding: 10px 20px;
`;

const FavoriteBrandsSection: React.FC = () => {
  const data = useBrandLogos();
  const [isPaused, setIsPaused] = useState(false);
  const handleMouseEnter = () => {
    setIsPaused(false);
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
    <Section bg="white" title="Bringing You Our Favorite Brands">
      <BackgroundSlider duration={40} paused={isPaused}>
        <Wrapper>{renderBrandLogos}</Wrapper>
      </BackgroundSlider>
    </Section>
  );
};

export { FavoriteBrandsSection };
