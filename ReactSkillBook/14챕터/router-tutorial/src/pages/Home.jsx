import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <Link to="/about">소개</Link>
      <Link to="/articles">게시글 목록</Link>
    </div>
  );
};

export default Home;
