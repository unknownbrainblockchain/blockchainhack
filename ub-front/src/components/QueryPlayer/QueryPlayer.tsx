import React, { useState } from "react";
import axios from "axios";
import { QueryPlayerWrapper, Left, Center, Right } from "./styled";

const QueryPlayer = () => {
  const [data, setData] = useState<string>();
  const [res, setRes] = useState<string>();
  const sendData = () => {
    axios.get(`http://127.0.0.1:8080?data=${data}`).then(data => {
      console.log("log-data", data.data);
      setRes(data.data);
    });
  };
  return (
    <QueryPlayerWrapper>
      <Left>
        <textarea
          value={data}
          onChange={e => {
            setData(e.target.value);
          }}
        />
      </Left>
      <Center>
        {JSON.stringify(res)}
        <button onClick={sendData}>play</button>
      </Center>
      <Right />
    </QueryPlayerWrapper>
  );
};

export default QueryPlayer;
