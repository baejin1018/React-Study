import React from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { delay1sSelctor, delayCountState } from "./stores/delayCount";
const Delay = () => {
  const delay1s = useRecoilValueLoadable(delay1sSelctor);
  const [delayCount, setDelayCount] = useRecoilState(delayCountState);

  if (delay1s.state === "loading") return <div>로딩중</div>;
  return (
    <>
      <h1>delayCount</h1>
      <h1>{delay1s.contents}</h1>
      <button onClick={() => setDelayCount((prev) => prev + 1)}>
        delayCount +
      </button>
      <button onClick={() => setDelayCount((prev) => prev - 1)}>
        delayCount -
      </button>
    </>
  );
};

export default Delay;
