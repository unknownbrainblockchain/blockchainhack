import React from "react";
import ExploreInfo from "../../components/ExploreInfo/ExploreInfo";
import QueryPlayer from "../../components/QueryPlayer/QueryPlayer";
import { Description } from "../../components/ExploreInfo/styled";
import { Banner, HomeWrapper } from "./styled";

const Home = () => {
  return (
    <HomeWrapper>
      <Banner />
      <ExploreInfo>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Description>
      </ExploreInfo>
      <QueryPlayer />
      home
    </HomeWrapper>
  );
};

export default Home;
