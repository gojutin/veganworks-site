import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import CommunitySolidarityChart from "../community-solidarity-chart";

const Box = styled.div`
  height: 200px;
  width: 95%;
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

    :hover {
      text-decoration: underline;
    }
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

        stats: allAirtable(filter: { table: { eq: "Stats" } }) {
          edges {
            node {
              data {
                Pounds
              }
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      const csLogo = data.csLogo.childImageSharp.fluid;

      const lbs = data.stats.edges.reduce((accum, value) => {
        return value.node.data.Pounds + accum;
      }, 0);

      return (
        <div>
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
            }}
          >
            <Box>
              <h4>For every snack box sold, we donate 25 cents to</h4>
              <Img fluid={csLogo} />
              <p>
                Learn more at{" "}
                <a href="https://www.communitysolidarity.org">
                  CommunitySolidarity.org
                </a>
              </p>
            </Box>
          </BackgroundImage>
          <CommunitySolidarityChart lbs={lbs} />
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
