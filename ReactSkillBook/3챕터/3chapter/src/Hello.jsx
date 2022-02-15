import React, { useState } from "react";

const Hello = () => {
  const [mes, setMes] = useState("");
  const onClickEnter = () => setMes("안녕하세요");
  const onClickOut = () => setMes("안녕히 가세요");
  return (
    <div>
      <h1>{mes}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickOut}>퇴장</button>
    </div>
  );
};

export default Hello;
