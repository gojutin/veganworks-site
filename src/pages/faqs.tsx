import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Components
import { CoverImage } from "../components/common/main-cover";
import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import { Section } from "../components/common/section";

import { faqs } from "../constants/faqs";

const Question = styled.p`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary4};
  text-transform: uppercase;
  padding: 10px 0px;
  line-height: 30px;
`;

const Answer = styled.p`
  color: ${({ theme }) => theme.colors.secondary1};
  font-size: 18px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray7};
`;

const Container = styled.div`
  min-width: 70vw;
`;

const Wrapper = styled.div`
  padding: 10px 40px;
  max-width: 960px;
  margin: 0 auto;
`;

const Contact = () => {
  const renderFAQS = faqs.map(({ q, a }) => {
    return (
      <React.Fragment key={q}>
        <Question>{q}</Question>
        <Answer>{a}</Answer>
      </React.Fragment>
    );
  });
  return (
    <Layout bg="white">
      <SEO title="VeganWorks FAQS" />
      <CoverImage>
        <Section bg="rgba(0,0,0,.8)" title="FAQS" titleColor="white">
          <Container>
            <Wrapper>
              {renderFAQS}
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Link
                  style={{ color: "lightskyblue", margin: "0 auto" }}
                  to="/"
                >
                  Go Back
                </Link>
                <Link
                  style={{ color: "lightskyblue", margin: "0 auto" }}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </Wrapper>
          </Container>
        </Section>
      </CoverImage>
    </Layout>
  );
};

export default Contact;
