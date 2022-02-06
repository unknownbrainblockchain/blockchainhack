import styled from "styled-components";
import { W_DESKTOP_CONTAINER } from "../../constants/variables";
import { ExploreInfoWrapper } from "../../components/ExploreInfo/styled";

export const Banner = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 216px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  margin-bottom: 31px;
`;
export const HomeWrapper = styled.main`
  width: ${W_DESKTOP_CONTAINER};
  margin-top: 8px;
  position: relative;
  ${ExploreInfoWrapper} {
    margin-top: 127px;
    max-width: 552px;
    margin-bottom: 32px;
  }
`;
