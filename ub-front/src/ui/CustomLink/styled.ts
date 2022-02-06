import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLOR_DARK_LIGHT, COLOR_WHITE_LIGHT } from "../../constants/variables";

export const StyledLink = styled(Link)<{ here?: boolean }>`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 56px;
  padding: 0 30px;
  border-radius: 10px;
  font-size: 24px;
  color: ${COLOR_WHITE_LIGHT};

  ${p =>
    p.here &&
    `
    color: #0085FF;
  `}
`;
