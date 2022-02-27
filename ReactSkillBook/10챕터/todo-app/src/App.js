import React, { useState, useRef, useCallback } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoListltem from "./components/TodoListltem";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트",
      checked: true,
    },
  ]);
  const nextid = useRef(2);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextid.current,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextid.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
