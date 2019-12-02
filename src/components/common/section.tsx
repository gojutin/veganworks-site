import React from "react";
import styled from "styled-components";

const StyledSection = styled.section<{ bg: string }>`
  background: ${props => props.bg};
  padding: 30px 10px;
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
  style?: React.CSSProperties;
  bg?: string;
  id?: string;
  className?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  titleColor = "#333",
  bg = "white",
  children,
  style,
  id,
  className,
}) => {
  return (
    <StyledSection className={className} bg={bg} style={style} id={id}>
      <SectionTitle color={titleColor}>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
};

export { Section };
