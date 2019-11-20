import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
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

const StyledBackgroundSection = styled.section`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const CoverImage: React.FC = ({ children }) => {
  const data = useVeganWorksCoverImage();
  const imageData = data.cover.childImageSharp.fluid;

  return (
    <StyledBackgroundSection>
      <StyledCoverImage
        Tag="section"
        fluid={imageData}
        alt="VeganWorks Products Display"
      >
        {children}
      </StyledCoverImage>
    </StyledBackgroundSection>
  );
};

export { CoverImage };
