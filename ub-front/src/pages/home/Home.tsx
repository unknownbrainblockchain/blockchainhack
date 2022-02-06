import React from "react";
import ExploreInfo from "../../components/ExploreInfo/ExploreInfo";
import QueryPlayer from "../../components/QueryPlayer/QueryPlayer";
import { Banner, HomeWrapper } from "./styled";

const Home = () => {
  return (
    <HomeWrapper>
      <Banner />
      <ExploreInfo />
      <QueryPlayer />
      home
    </HomeWrapper>
  );
};

export default Home;
