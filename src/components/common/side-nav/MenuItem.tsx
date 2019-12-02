import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary8};
  font-size: 20px;
  transition: color 0.2s ease-in;
  :hover {
    color: ${({ theme }) => theme.colors.primary5};
  }
`;

const Wrapper = styled(motion.div)`
  display: inline-block;
  margin: 0;
  padding: 10px 20px;
  list-style: none;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  width: 200px;
  border-radius: 0px 100px 100px 0px;
  text-transform: uppercase;
  background: transparent;
`;
const variants = {
  open: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    scale: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type Props = {
  onClick: () => void;
  item: {
    title: string;
    link: string;
  };
};
export const MenuItem: React.FC<Props> = ({ item, onClick }) => {
  return (
    <li>
      <StyledLink
        activeStyle={{ color: "#c711fc" }}
        to={item.link}
        // style={{ textDecoration: "none" }}
      >
        <Wrapper
          variants={variants}
          whileTap={{ scale: 0.98 }}
          onClick={onClick}
        >
          {item.title}
        </Wrapper>
      </StyledLink>
    </li>
  );
};
