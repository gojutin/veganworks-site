import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button).attrs(props => ({
  whileHover: { scale: 1.1 },
  transition: { duration: 0.3 },
}))`
  width: 100px;
  height: 40px;
  font-size: 20px;

  border-radius: 100px;
  outline: none;
  background: lightskyblue;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
`;

export default Button;
