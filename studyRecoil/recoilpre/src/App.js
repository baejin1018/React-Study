import { useRecoilState } from "recoil";
import { counting } from "./stores/atom";
function App() {
  const [count, setCount] = useRecoilState(counting);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </>
  );
}

export default App;
