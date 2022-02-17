import React, { useRef, useState } from "react";
import "./Validation.css";
const Validation = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState("");
  const [validated, setValidated] = useState("");
  const input = useRef();

  const onChangeInput = (e) => {
    setPassword(e.target.value);
  };

  const onClickBtn = () => {
    setClicked(true);
    setValidated(password === "000");
    input.current.focus();
  };
  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={onChangeInput}
        className={clicked ? (validated ? "succes" : "failure") : ""}
        ref={input}
      />
      <button onClick={onClickBtn}>검증하기</button>
    </div>
  );
};

export default Validation;
