import styled from "styled-components";
import { motion } from "framer-motion";

const PurpleButton = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3 },
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  min-width: 300px;
  background: ${props => props.theme.colors.purple};
  font-size: 20px;
  margin: 10px auto;
  cursor: pointer;
  box-shadow: none;
  padding: 10px 18px;
  outline: none;
  color: white;
  font-weight: 600;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export default PurpleButton;
