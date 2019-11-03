import React from "react";
import styled from "styled-components";

const StyledSection = styled.section<{ bg: string }>`
  background: ${props => props.bg};
  padding: 40px 10px;
`;

const SectionTitle = styled.h3<{ color: string }>`
  font-family: Satisfy;
  color: ${props => props.color};
  text-align: center;
  font-size: 3rem;
`;

type SectionProps = {
  title?: string;
  titleColor?: string;
  bg?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  titleColor = "#333",
  bg = "white",
  children,
}) => {
  return (
    <StyledSection bg={bg}>
      <SectionTitle color={titleColor}>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
};

export default Section;
