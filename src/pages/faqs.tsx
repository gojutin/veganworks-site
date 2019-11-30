import React from "react";
import styled from "styled-components";
// Components
import { CoverImagePageLayout } from "../components/common/cover-image-page-layout";

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

const Wrapper = styled.div`
  padding: 10px;
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 10px;
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
    <CoverImagePageLayout title="FAQs">
      <Wrapper>{renderFAQS}</Wrapper>
    </CoverImagePageLayout>
  );
};

export default Contact;
