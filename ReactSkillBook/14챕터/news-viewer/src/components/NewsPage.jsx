import React, { useState } from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";

const NewsPage = ({ match }) => {
  //   const category = match?.params.category || "all";
  const [url, setUrl] = useState("/");
  const category =
    window.location.pathname !== "/"
      ? window.location.pathname.replace("/", "")
      : window.location.assign("http://localhost:3000/all");
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
