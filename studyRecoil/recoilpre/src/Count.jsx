import React from "react";
import { useRecoilValue } from "recoil";
import { useResetRecoilState } from "recoil";
import { useRecoilState } from "recoil";
import { countState, countTitleState, inputState } from "./stores/count";
const count = () => {
  const [count, setCount] = useRecoilState(countState);
  const [inputValue, setInputValue] = useRecoilState(inputState);
  const [countInput, setCountInput] = useRecoilState(countTitleState);
  const resetCount = useResetRecoilState(countState);
  return (
    <div>
      <h1>{count}</h1>
      <h1>select {countInput}</h1>
      <h1>input값 {inputValue}</h1>
      <input type={Text} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={resetCount}>초기화</button>
      <button onClick={() => setCountInput("100")}>
        count, input 값 100 으로 변경
      </button>
    </div>
  );
};

export default count;
