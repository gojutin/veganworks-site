import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import AmazonStoreButton from "../amazon-store-button";
import { useVeganWorksCoverImage } from "../../queries/useVeganWorksCoverImage";

const StyledCoverImage = styled(BackgroundImage)`
  align-items: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  width: 100%;
  z-index: 0;
`;

const StyledLogo = styled(Img)`
  max-width: 800px;
  width: 90%;
`;

const Tagline = styled.h3`
  font-size: 2.4rem;
  color: white;
  font-family: ${props => props.theme.font.cursive};
  text-align: center;
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

const StyledBackgroundSection = styled.section`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const CoverSection: React.FC = () => {
  const data = useVeganWorksCoverImage();
  const imageData = data.desktop.childImageSharp.fluid;
  const logoData = data.icon.childImageSharp.fluid;
  return (
    <StyledBackgroundSection>
      <StyledCoverImage
        Tag="section"
        fluid={imageData}
        alt="VeganWorks Products Display"
      >
        <StyledLogo fluid={logoData} alt="VeganWorks Logo" />
        <Tagline>Delicious Vegan Snack Boxes</Tagline>
        <div style={{ marginTop: "50px" }}>
          <AmazonStoreButton
            title="Visit our Amazon Store"
            url="https://www.amazon.com/stores/VeganWorks/VeganWorks/page/E2CD3E05-F08E-470F-BD10-F668DA807157"
          />
        </div>
      </StyledCoverImage>
    </StyledBackgroundSection>
  );
};

export { CoverSection };
