import React from "react";
import ExploreInfo from "../../components/ExploreInfo/ExploreInfo";
import { Banner } from "../home/styled";
import InputTextarea from "../../ui/InputTextarea/InputTextarea";
import { CreateWrapper } from "./styled";

const Create = () => {
  return (
    <CreateWrapper>
      <Banner />
      <ExploreInfo>
        <InputTextarea placeholder="Description" />
      </ExploreInfo>
    </CreateWrapper>
  );
};

export default Create;
