import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  return (
    <div>
      <TodoInput list={list} setList={setList} text={text} setText={setText} />
      <TodoList list={list} text={text} setList={setList} />
    </div>
  );
}

export default App;
