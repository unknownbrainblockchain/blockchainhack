import React from "react";
import { QueryPlayerWrapper, Left, Center, Right } from "./styled";

const QueryPlayer = () => {
  return (
    <QueryPlayerWrapper>
      <Left>
        <textarea />
      </Left>
      <Center />
      <Right />
    </QueryPlayerWrapper>
  );
};

export default QueryPlayer;
