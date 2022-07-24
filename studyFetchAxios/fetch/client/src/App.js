import { useEffect, useState } from "react";
import axios from "axios";

const SERVER_URL = "http://localhost:4000/api/todo";
function App() {
  const [todo, setTodo] = useState(null);

  const fetchData = () => {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  };
  //axios이용하여 하는법
  // const axiosData = async () => {
  //   const response = await axios.get(SERVER_URL);
  //   setTodo(response.data);
  // };
  useEffect(() => {
    fetchData();
    //useEffect에 넣지 않으면 계속 리랜더링이 일어나게 된다
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    //axios로 하는법
    //axios.post(SERVER_URL,{text,done});
    fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        done,
      }),
    }).then(() => fetchData());
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todo?.map((todo) => (
        <div key={todo.id} style={{ display: "flex" }}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "Y" : "N"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
