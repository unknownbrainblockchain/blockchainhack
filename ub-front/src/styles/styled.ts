import styled, { createGlobalStyle } from "styled-components";
import { COLOR_DARK, COLOR_WHITE } from "../constants/variables";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    font-family: 'SF Pro Display';
    background-color: ${COLOR_DARK};
    color: ${COLOR_WHITE};
    margin: 0;
    min-height: 100vh;
  }
`;
