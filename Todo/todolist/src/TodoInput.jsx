import React, { useEffect, useState } from "react";

const TodoInput = ({ list, setList, text, setText }) => {
  useEffect(() => {
    console.log(list);
  }, [list]);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickBtn = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };
  return (
    <form>
      <input type="text" onChange={onChangeText} value={text} />
      <button onClick={onClickBtn}>확인</button>
    </form>
  );
};

export default TodoInput;
