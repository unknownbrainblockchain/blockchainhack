import styled from "styled-components";
import {
  COLOR_DARK,
  COLOR_DARK_LIGHT,
  COLOR_WHITE,
} from "../../constants/variables";

export const Description = styled.p`
  margin: 0;
  color: ${COLOR_WHITE};
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 24px;
`;
export const WWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
`;
export const HWrapper = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #fefefe;
`;
export const SubTitle = styled.span`
  font-weight: 300;
  font-size: 17px;
  line-height: 20px;
  color: #636366;
`;
export const InfoAvatar = styled.div`
  width: 72px;
  height: 72px;

  background: ${COLOR_DARK_LIGHT};
  border-radius: 16px;
`;
export const ExploreInfoWrapper = styled.div`
  padding: 16px;
  background-color: ${COLOR_DARK};
  border-radius: 16px;
  align-items: center;
`;
