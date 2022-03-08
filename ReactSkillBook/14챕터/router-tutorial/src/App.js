import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Propfile from "./pages/Propfile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Propfile />} />
    </Routes>
  );
}

export default App;
