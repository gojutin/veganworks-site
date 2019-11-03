import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import Section from "../section";
import { useBrandLogos } from "../../queries/useBrandLogos";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
`;

const BrandLogo = styled.div`
  margin: 20px 40px;
  width: 140px;
  text-align: center;
  padding: 10px 30px;
`;

const FavoriteBrandsSection: React.FC = () => {
  const data = useBrandLogos();

  const renderBrandLogos = data.allFile.edges.map(({ node }, i) => {
    return (
      <BrandLogo key={i}>
        <Img fixed={node.childImageSharp.fixed} alt="Vendor Image" />
      </BrandLogo>
    );
  });

  return (
    <Section
      title="Bringing you our favorite brands"
      bg="linear-gradient(to bottom,white,#cfdef3);"
    >
      <Wrapper>{renderBrandLogos}</Wrapper>
    </Section>
  );
};

export { FavoriteBrandsSection };
