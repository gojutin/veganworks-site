import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.1 },
  transition: { duration: 0.3 },
}))`
  width: 120px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  background: #1fd1b3;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
`;

export default Button;
