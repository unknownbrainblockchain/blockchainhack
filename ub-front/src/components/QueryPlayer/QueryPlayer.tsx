import React, { useState } from "react";
import axios from "axios";
import { QueryPlayerWrapper, Left, Center, Right, DataLayer } from "./styled";

const QueryPlayer = () => {
  const [data, setData] = useState<string>(
    "0xA3B26327482312f70E077aAba62336f7643e41E1"
  );
  const [data1, setData1] = useState<string>("11633151");
  const [res, setRes] = useState<any>();
  const sendData = () => {
    axios
      .get(`http://127.0.0.1:8080/send?data=${data}&data1=${data1}`)
      .then(r => {
        alert(r.data);
      });
  };

  const readData = () => {
    axios
      .get(`http://127.0.0.1:8080?data=${data}&data1=${data1}`)
      .then(data => {
        console.log("log-data", data.data);
        setRes(data.data);
      });
  };
  return (
    <QueryPlayerWrapper>
      <Left>
        <textarea
          value={data}
          placeholder="address"
          onChange={e => {
            setData(e.target.value);
          }}
        />
        <textarea
          placeholder="block"
          value={data1}
          onChange={e => {
            setData1(e.target.value);
          }}
        />
      </Left>
      <Center>
        {res?.data?.accounts?.map((item, i) => (
          <DataLayer key={i}>{JSON.stringify(item)}</DataLayer>
        ))}
        <button onClick={sendData}>send</button>
        <button onClick={readData}>read</button>
      </Center>
      <Right />
    </QueryPlayerWrapper>
  );
};

export default QueryPlayer;
