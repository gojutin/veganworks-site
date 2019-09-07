import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button).attrs(props => ({
  whileHover: { scale: 1.1 },
  transition: { duration: 1 },
}))`
  width: 100px;
  height: 50px;
  font-size: 20px;
  border: 2px solid #333;
  border-radius: 100px;
  outline: none;
  background: lightskyblue;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
`;

export default Button;
