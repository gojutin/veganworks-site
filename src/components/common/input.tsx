import styled from "styled-components";
import { motion } from "framer-motion";

const Input = styled(motion.input).attrs(() => ({
  initial: { background: "#dadada" },
  animate: { background: "#fff" },
  transition: { duration: 1 },
}))`
  width: 90%;
  min-width: 300px;
  max-width: 600px;
  font-size: 18px;
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 8px;
  outline: none;
  color: #333;
  ::placeholder {
    color: #999;
  }
`;

export { Input };
