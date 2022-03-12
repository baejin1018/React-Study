import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>어바웃 페이지</h1>
      <p>쿼리 스트링 : {location.search}</p>
    </div>
  );
};

export default About;
