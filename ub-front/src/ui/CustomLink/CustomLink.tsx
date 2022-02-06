import React from "react";
import { useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { StyledLink } from "./styled";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = Boolean(useMatch({ path: resolved.pathname, end: true }));

  return (
    <StyledLink here={match} to={to} {...props}>
      {children}
    </StyledLink>
  );
};

export default CustomLink;
