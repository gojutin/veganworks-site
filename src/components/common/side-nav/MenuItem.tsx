import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary8};
  font-size: 20px;
`;

const ListItem = styled(motion.li)`
  display: block;
  margin: 0;
  padding: 10px 20px;
  list-style: none;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  width: 240px;
  border-radius: 0px 100px 100px 0px;
  text-transform: uppercase;
  background: transparent;
  transition: background 0.5s ease-in;
  :hover {
    background: ${({ theme }) => theme.colors.primary2};
  }
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
    y: 50,
    opacity: 0,
    scale: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type Props = {
  item: {
    title: string;
    link: string;
  };
};
export const MenuItem: React.FC<Props> = ({ item }) => {
  return (
    <StyledLink activeStyle={{ color: "#c711fc" }} to={item.link}>
      <ListItem variants={variants} whileTap={{ scale: 0.95 }}>
        {item.title}
      </ListItem>
    </StyledLink>
  );
};
