import { useCallback, useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { Routes, Route } from "react-router-dom";
import NewsPage from "./components/NewsPage";
// import dotenv from "dotenv";

// dotenv.config();
function App() {
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />; */}
      <Routes>
        {/* <Route path="/" element={<NewsPage />} exact /> */}
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;
