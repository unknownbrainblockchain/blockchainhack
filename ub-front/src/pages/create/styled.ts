import styled from "styled-components";
import { W_DESKTOP_CONTAINER } from "../../constants/variables";
import { ExploreInfoWrapper } from "../../components/ExploreInfo/styled";
import { TextArea } from "../../ui/InputTextarea/styled";

export const CreateWrapper = styled.main`
  width: ${W_DESKTOP_CONTAINER};
  margin-top: 8px;
  position: relative;
  ${ExploreInfoWrapper} {
    margin-top: 127px;
    max-width: 552px;
    margin-bottom: 32px;
  }

  ${TextArea} {
    height: 250px;
    width: 100%;
  }
`;
