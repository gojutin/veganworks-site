import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    display: "block",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.5 },
  },
};

type Item = {
  title: string;
  link: string;
};

const UnorderedList = styled(motion.ul)`
  margin: 0;
  padding: 25px;
  position: absolute;
  top: 70px;
  width: 230px;
`;

export const Navigation: React.FC<{
  items: Item[];
  onClick: () => void;
}> = ({ items, onClick }) => {
  const renderItems = items.map(i => (
    <MenuItem item={i} key={i.title} onClick={onClick} />
  ));

  return <UnorderedList variants={variants}>{renderItems}</UnorderedList>;
};
