import React from "react";

// Components
import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";

// Sections
import {
  CoverSection,
  ProductsSection,
  MailingListSection,
  FavoriteBrandsSection,
  CommunitySolidaritySection,
  FooterSection,
} from "../components/sections";

const App: React.FC = () => (
  <Layout>
    <SEO />
    <CoverSection />
    <ProductsSection />
    <FavoriteBrandsSection />
    <CommunitySolidaritySection />
    <MailingListSection />
    <FooterSection />
  </Layout>
);

export default App;
