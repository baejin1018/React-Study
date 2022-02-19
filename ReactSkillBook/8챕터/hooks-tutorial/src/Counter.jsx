import React, { useEffect, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
    return () => {
      console.log("clean up");
    };
  }, [value]);
  return (
    <div>
      <p>현재 카운터 값 : {value}</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
