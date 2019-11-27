import styled from "styled-components";

export const Anchor = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))<{ link?: boolean; color?: string }>`
  text-decoration: none;
  color: ${({ theme, color }) => color || theme.colors.secondary3};
  padding-bottom: ${({ link }) => (link ? "2px" : "0px")};
  border-bottom: ${({ link, theme }) =>
    link ? `2px solid ${theme.colors.secondary3}` : "none"};
  transition: opacity 0.3s ease-out;
  :hover {
    opacity: ${({ link }) => (link ? 0.8 : 1)};
  }
`;
