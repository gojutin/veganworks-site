import React from "react";
// Components
import { CoverImagePageLayout } from "../components/common/cover-image-page-layout";
import { ContactForm } from "../components/common/contact-form";

const Contact: React.FC = () => {
  return (
    <CoverImagePageLayout title="Contact Us">
      <ContactForm />
    </CoverImagePageLayout>
  );
};

export default Contact;
