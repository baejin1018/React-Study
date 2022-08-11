import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { recoilStartCountState } from "./stores/recoilStar";

const RecoilStar = () => {
  const recoilStar = useRecoilValueLoadable(recoilStartCountState);
  if (recoilStar.state === "loading") return <div>로딩중</div>;
  return (
    <>
      <h1>recoil git hub star</h1>
      <h1>{recoilStar.contents}</h1>
    </>
  );
};

export default RecoilStar;
