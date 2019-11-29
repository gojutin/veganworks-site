import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button).attrs(() => ({
  initial: { boxShadow: "0 0px 0px #fff" },
  whileHover: { scale: 1.02, boxShadow: "0 0px 10px  #fff" },
  transition: { duration: 0.2 },
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  min-width: 150px;
  background: ${props => props.theme.colors.primary5};
  font-size: 20px;
  margin: 10px;
  cursor: pointer;
  border: none;
  box-shadow: none;
  padding: 10px 18px;
  outline: none;
  color: white;
  font-weight: 600;
  width: ${props => (props.theme.screens.sm ? "90%" : "auto")};
`;

export { Button };
