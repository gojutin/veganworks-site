/* eslint-disable @typescript-eslint/tslint/config */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import downcaret from "../../../svgs/down-caret.svg";

const bounceTransition = {
  y: {
    duration: 1.5,
    yoyo: Infinity,
    repeatDelay: 2,
  },
  type: "spring",
  delay: 2,
};

const StyledDownCaret = styled(motion.img)`
  display: block;
  color: white;
  font-size: 20px;
  position: absolute;
  bottom: 50px;
`;

export const DownCaret: React.FC = () => {
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <StyledDownCaret
          initial={{ opacity: 0 }}
          animate={{ y: [0, 10, 0, 10, 0, 10, 2], opacity: 1 }}
          transition={bounceTransition}
          exit={{ scale: 0 }}
          src={downcaret}
          height={20}
          alt="Scroll Down"
        />
      )}
    </AnimatePresence>
  );
};
