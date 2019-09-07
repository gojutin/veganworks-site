import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import AmazonButton from "../amazon-button";
import { motion } from "framer-motion";

const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
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
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(quality: 90, maxWidth: 420) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      const logoData = data.icon.childImageSharp.fluid;
      return (
        <div
          css={`
            position: sticky;
            top: 0;
            z-index: -100;
          `}
        >
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            // backgroundColor={`#040e18`}
            style={{
              height: "100vh",
              width: "100%",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: 0,
              zIndex: 0,
            }}
          >
            <Img
              style={{
                width: "100%",
                maxWidth: "600px",
              }}
              fluid={logoData}
            />

            <div>
              <AmazonButton
                title="Visit our Amazon Store"
                url="https://www.amazon.com/stores/VeganWorks/VeganWorks/page/E2CD3E05-F08E-470F-BD10-F668DA807157"
              />
            </div>

            {/* </motion.div> */}
          </BackgroundImage>
        </div>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
