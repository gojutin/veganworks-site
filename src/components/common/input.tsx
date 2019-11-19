import styled from "styled-components";
import { motion } from "framer-motion";

const Input = styled(motion.input).attrs(() => ({
  initial: { background: "#dadada", scale: 0.9 },
  animate: { background: "#fff", scale: 1 },
  transition: { duration: 1 },
}))`
  width: 90%;
  max-width: 400px;
  font-size: 20px;
  padding: 8px 20px;
  border: 2px solid #333;
  border-radius: 10px;
  outline: none;
  color: #333;
  ::placeholder {
    color: #999;
  }
`;

export default Input;
