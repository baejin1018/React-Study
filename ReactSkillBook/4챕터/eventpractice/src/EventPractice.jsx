import React, { useState } from "react";

const EventPractice = () => {
  const [mes, setMes] = useState("");
  const onChangeInput = (e) => {
    setMes(e.target.value);
  };
  const onClickBtn = () => {
    setMes("");
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="message" value={mes} onChange={onChangeInput} />
      <button onClick={onClickBtn}>초기화</button>
    </div>
  );
};

export default EventPractice;
