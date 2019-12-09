import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useOnClickOutside } from "./use-click-outside";

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  z-index: 10000;
`;

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  background: rgba(255, 255, 255, 1);
  height: 250px;
  border-radius: 0px 0px 40px 0px;
`;

const sidebar = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 37px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

type Item = {
  title: string;
  link: string;
};

export const SideNav: React.FC<{ items: Item[] }> = ({ items }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    const onScroll = () => {
      if (isOpen) {
        toggleOpen();
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen, toggleOpen]);

  const containerRef = useRef(null);
  useOnClickOutside(containerRef, () => {
    if (isOpen) {
      toggleOpen(); // close the nav when clicked outside
    }
  });

  const handleClickMenuItem = () => toggleOpen();

  return (
    <Nav
      initial={isOpen ? "open" : "closed"}
      animate={isOpen ? "open" : "closed"}
      custom={{ height: "200px" }}
      ref={containerRef}
    >
      <Background variants={sidebar} />
      <MenuToggle toggle={toggleOpen} />
      <Navigation items={items} onClick={handleClickMenuItem} />
    </Nav>
  );
};
