import React, { useState } from "react";

const TodoList = ({ list, setList }) => {
  const onClickDel = (key) => {
    console.log(key);
    setList(list.filter((x, index) => key !== index));
  };

  return (
    <div>
      {list.map((text, index) => {
        return (
          <>
            <li>{text}</li>
            <button onClick={() => onClickDel(index)}>❌</button>
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
