import React from "react";
import styled from "styled-components";

const StyledSection = styled.section<{ bg: string }>`
  background: ${props => props.bg};
  padding: 30px 10px;
  height: ${({ theme }) => (theme.screens.sm ? "100vh" : "auto")};
`;

const SectionTitle = styled.h3<{ color: string }>`
  font-family: Satisfy;
  color: ${props => props.color || props.theme.colors.gray6};
  text-align: center;
  font-size: ${({ theme }) => (theme.screens.sm ? "2rem" : "3rem")};
  margin: 2rem 0rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
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

export { Section };
