import styled from "styled-components";
import { Input } from "./input";

export const Search = styled(Input).attrs(() => ({
  type: "search",
}))`
  border-radius: 100px;
`;
