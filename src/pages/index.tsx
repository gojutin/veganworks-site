import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import {
  CoverSection,
  ProductsSection,
  MailingListSection,
  FavoriteBrandsSection,
  CommunitySolidaritySection,
  FooterSection,
} from "../components/sections";

const App = () => (
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
