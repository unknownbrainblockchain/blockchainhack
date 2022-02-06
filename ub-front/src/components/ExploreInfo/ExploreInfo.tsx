import React from "react";
import {
  ExploreInfoWrapper,
  InfoAvatar,
  HWrapper,
  Title,
  WWrapper,
  SubTitle,
} from "./styled";

const ExploreInfo: React.FC = ({ children }) => {
  return (
    <ExploreInfoWrapper>
      <WWrapper>
        <InfoAvatar />
        <HWrapper>
          <Title>Name of composition</Title>
          <SubTitle>@mikeandpicture</SubTitle>
        </HWrapper>
      </WWrapper>
      {children}
    </ExploreInfoWrapper>
  );
};

export default ExploreInfo;
