import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import Section from "../common/section";
import { useBrandLogos } from "../../queries/useBrandLogos";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
`;

const BrandLogo = styled(Img)`
  margin: 20px 40px;
  width: 140px;
  text-align: center;
  padding: 10px 20px;
`;

const FavoriteBrandsSection: React.FC = () => {
  const data = useBrandLogos();

  const renderBrandLogos = data.allFile.edges.map(({ node }, i) => {
    return (
      <BrandLogo
        key={i}
        fixed={node.childImageSharp.fixed}
        alt="Vendor Image"
      />
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
