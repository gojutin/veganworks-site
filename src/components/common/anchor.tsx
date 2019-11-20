import styled from "styled-components";

export const Anchor = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  text-decoration: none;
`;
