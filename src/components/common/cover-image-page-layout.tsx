import React from "react";
import styled from "styled-components";
// Components
import { CoverImage } from "./main-cover";
import { Layout } from "./layout";
import { SEO } from "./seo";
import { Link } from "./link";
import { Section } from "./section";

const Wrapper = styled.div`
  padding: 10px;
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const sectionStyles = {
  minHeight: "100vh",
  minWidth: "70vw",
  padding: "10px",
  color: "white",
  maxWidth: "700px",
  margin: "0 auto",
};

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`;

interface Props {
  title: string;
  underConstruction?: boolean;
}

export const CoverImagePageLayout: React.FC<Props> = ({
  children,
  title,
  underConstruction,
}) => {
  const renderChildren = underConstruction ? (
    <div style={{ textAlign: "center" }}>Coming soon...</div>
  ) : (
    children
  );
  return (
    <Layout bg="rgb(0,0,26)">
      <SEO title={title} />
      <CoverImage>
        <Section
          bg="rgba(0,0,26,.8)"
          title={title}
          titleColor="white"
          style={sectionStyles}
        >
          <Wrapper>{renderChildren}</Wrapper>
          <LinkWrapper>
            <Link to="/">Go Back</Link>
            <Link to="/contact">Contact Us</Link>
          </LinkWrapper>
        </Section>
      </CoverImage>
    </Layout>
  );
};
