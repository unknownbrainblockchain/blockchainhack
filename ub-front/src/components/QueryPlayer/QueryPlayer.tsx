import React, { useState } from "react";
import axios from "axios";
import { QueryPlayerWrapper, Left, Center, Right } from "./styled";

const QueryPlayer = () => {
  const [data, setData] = useState<string>();
  const [data1, setData1] = useState<string>();
  const [res, setRes] = useState<any>();
  const sendData = () => {
    axios
      .get(`http://127.0.0.1:8080?data=${data}&data1=${data1}`)
      .then(data => {
        console.log("log-data", data.data);
        setRes(data.data);
      });

    // axios
    //   .get(
    //     "http://a1b3-86-62-78-69.ngrok.io/add?address=0xA3B26327482312f70E077aAba62336f7643e41E1&start_block=11633151"
    //   )
    //   .then(d => {
    //     setRes(d);
    //   })
    //   .finally(() => {
    //     return "false";
    //   });
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
        <textarea
          value={data1}
          onChange={e => {
            setData1(e.target.value);
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
