import React from "react";
import { useParams } from "react-router-dom";

const data = {
  jinyoung: {
    name: "배진영",
    description: "리액트 공부중",
  },
  okgun: {
    name: "옥건호",
    description: "바보멍청이",
  },
};
const Propfile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지않는 프로필 입니다</p>
      )}
    </div>
  );
};

export default Propfile;
