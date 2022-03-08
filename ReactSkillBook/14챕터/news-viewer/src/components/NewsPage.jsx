import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  //   const category = match?.params.category || "all";
  const params = useParams();
  const category = params.category || "all";
  useEffect(() => {
    console.log("params: ", params.category, "category: ", category);
  }, []);
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
