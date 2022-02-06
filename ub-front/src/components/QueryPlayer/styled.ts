import styled from "styled-components";
import {
  COLOR_DARK,
  COLOR_DARK_LIGHT,
  COLOR_WHITE,
} from "../../constants/variables";

export const DataLayer = styled.div`
  background-color: ${COLOR_DARK_LIGHT};
  margin: 10px 5px;
  padding: 8px;
  border-radius: 10px;
`;
export const Left = styled.div`
  textarea {
    background-color: unset;
    border: unset;
    width: 100%;
    height: 50%;
    resize: none;
    color: ${COLOR_WHITE};
    font-weight: 600;
    font-size: 17px;
    padding: 16px;
    outline: none;
  }
`;
export const Center = styled.div`
  border-left: 4px solid #2e3032;
  border-right: 4px solid #2e3032;
`;
export const Right = styled.div``;
export const QueryPlayerWrapper = styled.div`
  min-height: 450px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 4px solid #2e3032;
  box-sizing: border-box;
  border-radius: 24px;
`;
