import React from "react";
// Components
import { CoverImage } from "../components/common/main-cover";
import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import { Section } from "../components/common/section";
import { Link } from "../components/common/link";

const TermsOfUse = () => {
  return (
    <Layout bg="white">
      <SEO title="Contact VeganWorks" />
      <CoverImage>
        <Section
          bg="rgba(0,0,0,.6)"
          title="Terms Of Use"
          titleColor="white"
          style={{
            minHeight: "100vh",
            minWidth: "70vw",
            padding: "30px",
            color: "white",
          }}
        >
          <p>Coming soon...</p>
          <Link to="/">Go Back</Link>
        </Section>
      </CoverImage>
    </Layout>
  );
};

export default TermsOfUse;
