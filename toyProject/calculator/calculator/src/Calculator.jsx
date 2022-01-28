import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  const onClickBtn = (e) => {
    setResult(result.concat(e.target.name));
  };
  return (
    <div>
      <div>{result}</div>
      <div>
        <button name="0" onClick={onClickBtn}>
          0
        </button>
        <button name="1" onClick={onClickBtn}>
          1
        </button>
        <button name="2" onClick={onClickBtn}>
          2
        </button>
        <button name="3" onClick={onClickBtn}>
          3
        </button>
        <button name="4" onClick={onClickBtn}>
          4
        </button>
        <button name="5" onClick={onClickBtn}>
          5
        </button>
        <button name="6" onClick={onClickBtn}>
          6
        </button>
        <button name="7" onClick={onClickBtn}>
          7
        </button>
        <button name="8" onClick={onClickBtn}>
          8
        </button>
        <button name="9" onClick={onClickBtn}>
          9
        </button>
        <button name="+" onClick={onClickBtn}>
          +
        </button>
        <button name="-" onClick={onClickBtn}>
          -
        </button>
        <button name="/" onClick={onClickBtn}>
          /
        </button>
        <button name="*" onClick={onClickBtn}>
          *
        </button>
      </div>
    </div>
  );
};

export default Calculator;
