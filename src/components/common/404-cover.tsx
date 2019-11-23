import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { use404Cover } from "../../queries/use404Cover";

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
`;

const StyledBackgroundSection = styled.section`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const LostCover: React.FC = ({ children }) => {
  const coverImage = use404Cover();
  const imageData = coverImage.cover.childImageSharp.fluid;

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

export { LostCover };
