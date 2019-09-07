import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

const Box = styled.div`
  height: 200px;
  width: 100%;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.7);
  font-family: "Alice";
  padding: 20px 10px;
  text-align: center;
  color: white;
  h4 {
    font-size: 25px;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: lightskyblue;
  }
  p {
    padding: 0;
    margin: 0;
  }
`;

const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: { eq: "community-solidarity-collage.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        csLogo: file(relativePath: { eq: "community-solidarity-logo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(quality: 90, maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      const csLogo = data.csLogo.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          // backgroundColor={`#040e18`}
          style={{
            height: "100vh",
            width: "100%",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
          }}
        >
          <Box>
            <h4>For every snack box sold, we donate 25 cents to</h4>
            <Img fluid={csLogo} />
            <p>
              Learn more at{" "}
              <a href="https://www.communitysolidarity.org">
                communitysolidarity.org
              </a>
            </p>
          </Box>
        </BackgroundImage>
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
