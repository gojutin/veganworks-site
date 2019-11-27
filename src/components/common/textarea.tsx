import styled from "styled-components";
import { motion } from "framer-motion";

const TextArea = styled(motion.textarea).attrs(() => ({
  initial: { background: "#dadada" },
  animate: { background: "#fff" },
  transition: { duration: 1 },
  rows: 8,
}))`
  width: 90%;
  margin: 10px;
  max-width: 600px;
  font-size: 18px;
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 10px;
  outline: none;
  color: #333;
  ::placeholder {
    color: #999;
  }
`;

export { TextArea };
