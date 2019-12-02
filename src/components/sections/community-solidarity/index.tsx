import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { ChartArea } from "./chart-area";
import { useCommunitySolidarityData } from "../../../queries/useCommunitySolidarityData";
import Img from "gatsby-image";

const CoverImage = styled(BackgroundImage)`
  min-height: ${({ theme }) => (theme.screens.sm ? "40vh" : "100vh")};
  width: auto;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const InfoSection = styled.section`
  min-height: 600px;
  background: ${({ theme }) => theme.colors.secondary9};
  color: white;
  text-align: center;
  padding: 30px 10px 10px 10px;
`;

const InfoText = styled.div`
  max-width: 700px;
  width: 90%;
  margin: ${({ theme }) => (theme.screens.sm ? "50px 20px" : "0 auto")};
  padding: 30px 0px 10px 0px;
  text-align: center;
  p {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
  border: 4px solid #ff0066;
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
        alt="Community Solidarity Cover Image"
      />
      <InfoSection>
        <InfoText>
          <p>For every snack box sold, we donate 25 cents to</p>
          <Img fluid={csLogo} alt="Community Solidarity Logo" />
        </InfoText>
        <ChartArea lbs={lbs} />
      </InfoSection>
    </>
  );
};

export { CommunitySolidaritySection };
