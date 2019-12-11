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

const CoverImageSection = styled(Section)`
  height: 100vh;
  min-width: ${({ theme }) => (theme.screens.sm ? "100vw" : "65vw")};
  padding: 10px;
  color: white;
  max-width: 700px;
  margin: 0 auto;
  overflow: scroll;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`;

interface Props {
  title: string;
  underConstruction?: boolean;
  hideContact?: boolean;
}

export const CoverImagePageLayout: React.FC<Props> = ({
  children,
  title,
  underConstruction,
  hideContact,
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
        <CoverImageSection
          bg="rgba(0,0,26,.8)"
          title={title}
          titleColor="white"
        >
          <Wrapper>{renderChildren}</Wrapper>
          <LinkWrapper>
            <Link to="/">Go Back</Link>
            {!hideContact && <Link to="/contact">Contact Us</Link>}
          </LinkWrapper>
        </CoverImageSection>
      </CoverImage>
    </Layout>
  );
};
