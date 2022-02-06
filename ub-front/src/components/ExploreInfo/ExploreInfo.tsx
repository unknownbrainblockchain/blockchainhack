import React from "react";
import {
  ExploreInfoWrapper,
  InfoAvatar,
  HWrapper,
  Title,
  Description,
  WWrapper,
  SubTitle,
} from "./styled";

const ExploreInfo = () => {
  return (
    <ExploreInfoWrapper>
      <WWrapper>
        <InfoAvatar />
        <HWrapper>
          <Title>Name of composition</Title>
          <SubTitle>@mikeandpicture</SubTitle>
        </HWrapper>
      </WWrapper>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </Description>
    </ExploreInfoWrapper>
  );
};

export default ExploreInfo;
