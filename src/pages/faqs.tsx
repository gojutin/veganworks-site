import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
// Components
import { CoverImagePageLayout } from "../components/common/cover-image-page-layout";
import { Search } from "../components/common/search";
// import { useSearch } from "../hooks/useSearch";

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

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(faqs);

  useEffect(() => {
    const filteredFAQs = faqs.filter(item => {
      const term = searchTerm.toLowerCase();
      return (
        item.q.toLowerCase().includes(term) ||
        item.a.toLowerCase().includes(term)
      );
    });
    setFilteredData(filteredFAQs);
  }, [searchTerm]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const renderFAQS = filteredData.map(({ q, a }) => {
    return (
      <motion.div
        key={q}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Question>{q}</Question>
        <Answer>{a}</Answer>
      </motion.div>
    );
  });

  const ClearButton = styled.button`
    border: none;
    background: none;
    padding: 0px 8px;
    color: ${({ theme }) => theme.colors.secondary3};
    cursor: pointer;
    text-decoration: underline;
  `;

  const clearSearch = () => {
    setSearchTerm("");
  };

  const searchText = filteredData.length ? (
    <p>
      Showing {filteredData.length} of {faqs.length}
    </p>
  ) : (
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      No matches for &quot;{searchTerm}&quot;.
      <ClearButton onClick={clearSearch}>clear</ClearButton>
    </motion.p>
  );

  return (
    <CoverImagePageLayout title="FAQs">
      <Search
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search FAQs"
      />
      <div style={{ paddingLeft: "35px" }}>{searchText}</div>

      <Wrapper>
        <AnimatePresence>{renderFAQS}</AnimatePresence>
      </Wrapper>
    </CoverImagePageLayout>
  );
};

export default FAQs;
