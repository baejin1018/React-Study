import { useCallback, useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { Routes, Route } from "react-router-dom";
import NewsPage from "./components/NewsPage";
// import dotenv from "dotenv";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
