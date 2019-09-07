import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button).attrs(props => ({
  whileHover: { scale: 1.1 },
  transition: { duration: 0.3 },
}))`
  width: 120px;
  height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 100px;
  outline: none;
  background: #1fd1b3;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
`;

export default Button;
