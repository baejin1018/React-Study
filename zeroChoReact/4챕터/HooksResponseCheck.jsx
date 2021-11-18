import React, { useRef, useState } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();
  //setState를 하면 리턴부분이 다시 시작되지만 ref부분은 건드려도 다시 랜더링되지 않음
  //값이 바뀌기는 하지만 화면영향을 미치지 않게 하고싶을떄 ref 사용

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요");
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 3000); //2초에사 4초 사이 랜덤
    } else if (state === "ready") {
      clearTimeout(timeout.current);
      //성급하게 클릭
      setState("waiting");
      setMessage("너무 성급하시군요 ! 초록색이 된 후에 클릭하세요");
    } else if (state === "now") {
      //반응속도 체크
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭해서 시작하세요");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간:
          {result.reduce((a, c) => a + c) / result.length}
          ms
        </div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {/* {() => { //return 안에 if 쓰는법 함수안에는 if를 쓸수 있는것을 이용하여 즉시 실행 함수를 만든후 그안에서 if 사용 (for도 이렇게 사용가능)
        if (result.length === 0) {
          return null;
        } else {
          return (
            <>
              <div>
                평균 시간:
                {result.reduce((a, c) => a + c) / result.length}
                ms
              </div>
              <button onClick={onReset}>리셋</button>
            </>
          );
        }
      }} */}
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
