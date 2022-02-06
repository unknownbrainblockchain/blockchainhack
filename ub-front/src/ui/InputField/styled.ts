import styled from "styled-components";
import { COLOR_DARK_LIGHT, COLOR_WHITE_LIGHT } from "../../constants/variables";

export const Field = styled.input`
  height: 56px;
  background-color: ${COLOR_DARK_LIGHT};
  border-radius: 10px;
  border: unset;
  padding: 13px 16px;
  font-size: 24px;
  color: ${COLOR_WHITE_LIGHT};
`;
