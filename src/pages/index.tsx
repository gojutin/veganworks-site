import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleSection from "../components/sections/title-section";
import SnackBoxesSection from "../components/sections/snack-boxes-section";
import MailingListSection from "../components/sections/mailing-list-section";
import ContactFormSection from "../components/sections/contact-form-section";
import FavoriteBrandsSection from "../components/sections/favorite-brands-section";
import CommunitySolidaritySection from "../components/sections/community-solidarity-section";
import Footer from "../components/footer";

const App = () => (
  <Layout>
    <SEO />
    <TitleSection />
    <SnackBoxesSection />
    <FavoriteBrandsSection />
    <CommunitySolidaritySection />
    <MailingListSection />
    <Footer />
    {/* <ContactFormSection /> */}
  </Layout>
);

export default App;
