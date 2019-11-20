import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

// Components
import { Section } from "../common/section";
import { SnackBoxListing } from "../common/snack-box-listing";

const ProductsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

type ProductsSectionProps = {};

const ProductsSection: React.FC<ProductsSectionProps> = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allAirtable(
        filter: { table: { eq: "SnackBoxes" }, data: { isLive: { eq: true } } }
      ) {
        edges {
          node {
            data {
              Name
              Availability
              Image {
                url
              }
              Link
              Price
              Sale_Price
            }
          }
        }
      }
    }
  `);

  const renderSnackBoxListings = data.allAirtable.edges.map(({ node }) => {
    return <SnackBoxListing key={node.data.Name} data={node.data} />;
  });
  return (
    <Section bg="linear-gradient(#c2d4f0, white)" title="Our Snack Boxes">
      <ProductsWrapper>{renderSnackBoxListings}</ProductsWrapper>
    </Section>
  );
};

export { ProductsSection };
