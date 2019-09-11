import styled from "styled-components";
import { motion } from "framer-motion";

const Input = styled(motion.input).attrs(() => ({
  initial: { background: "#dadada", scale: 0.9 },
  animate: { background: "white", scale: 1 },
  transition: { duration: 1 },
}))`
  width: 100%;
  max-width: 300px;
  font-size: 20px;
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 100px;
  outline: none;
  color: #333;
  ::placeholder {
    color: #999;
  }
`;

export default Input;
