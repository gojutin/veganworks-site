import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { CommunitySolidarityChart } from "../common/community-solidarity-chart";
import { useCommunitySolidarityData } from "../../queries/useCommunitySolidarityData";

const CoverImage = styled(BackgroundImage)`
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const InfoBox = styled.div`
  min-height: 200px;
  width: 90%;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.8);
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
    color: ${props => props.theme.colors.secondary4};

    :hover {
      text-decoration: underline;
    }
  }
  p {
    padding: 0;
    margin: 0;
  }
`;

const CommunitySolidaritySection = () => {
  const data = useCommunitySolidarityData();
  const imageData = data.desktop.childImageSharp.fluid;
  const csLogo = data.csLogo.childImageSharp.fluid;

  const lbs = data.stats.edges.reduce((accum, value) => {
    return value.node.data.Pounds + accum;
  }, 0);

  return (
    <>
      <CoverImage
        Tag="section"
        fluid={imageData}
        alt="Community Solidarity Collage"
      >
        <InfoBox>
          <h4>For every snack box sold, we donate 25 cents to</h4>
          <Img fluid={csLogo} alt="Community Solidarity Logo" />
          <p>
            Learn more at{" "}
            <a href="https://www.communitysolidarity.org">
              CommunitySolidarity.org
            </a>
          </p>
        </InfoBox>
      </CoverImage>
      <CommunitySolidarityChart lbs={lbs} />
    </>
  );
};

export { CommunitySolidaritySection };
