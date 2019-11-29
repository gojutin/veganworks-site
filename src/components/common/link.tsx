import React from "react";
import styled, { css } from "styled-components";
import { Link as GLink, GatsbyLinkProps } from "gatsby";
import { motion } from "framer-motion";

const baseStyles = css`
  display: block;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const StyledLink = styled(motion.a).attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))<{ color?: string }>`
  ${baseStyles};
  color: ${({ theme, color }) => (color ? color : theme.colors.secondary3)};
`;

const GatsbyLink = styled(GLink)`
  ${baseStyles};
  color: ${({ theme, color }) => (color ? color : theme.colors.secondary3)};
`;

type AnchorLink = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  color?: string;
};

export const Link: React.FC<GatsbyLinkProps<null> | AnchorLink> = ({
  to,
  children,
  href,
  color,
  style,
}) => {
  if (to) {
    return (
      <GatsbyLink style={style} to={to} color={color}>
        {children}
      </GatsbyLink>
    );
  } else {
    return (
      <StyledLink style={style} color={color} href={href}>
        {children}
      </StyledLink>
    );
  }
};
