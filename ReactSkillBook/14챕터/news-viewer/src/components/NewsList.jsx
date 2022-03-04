import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizeing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://google.com",
//   urlToImage: "https://via.placeholder.com/160",
// };
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(`
          https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e9085c012749412db8132a09e7ea243d`);
        console.log(response);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoding(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  if (loding) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
