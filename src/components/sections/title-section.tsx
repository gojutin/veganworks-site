import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import AmazonStoreButton from "../amazon-store-button";

const StyledBackgroundImage = styled(BackgroundImage)`
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

const BackgroundSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "veganworks_display.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      icon: file(relativePath: { eq: "veganworks-logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 420) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  const imageData = data.desktop.childImageSharp.fluid;
  const logoData = data.icon.childImageSharp.fluid;
  return (
    <section>
      <StyledBackgroundImage
        Tag="section"
        fluid={imageData}
        alt="VeganWorks Products Display"
      >
        <StyledLogo fluid={logoData} alt="VeganWorks Logo" />
        <h3
          css={`
            font-size: 2.4rem;
            color: white;
            font-family: Satisfy;
            text-align: center;
            @media (max-width: 500px) {
              font-size: 1.8rem;
            }
          `}
        >
          Delicious Vegan Snack Boxes
        </h3>
        <div style={{ marginTop: "50px" }}>
          <AmazonStoreButton
            title="Visit our Amazon Store"
            url="https://www.amazon.com/stores/VeganWorks/VeganWorks/page/E2CD3E05-F08E-470F-BD10-F668DA807157"
          />
        </div>

        {/* </motion.div> */}
      </StyledBackgroundImage>
    </section>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
