import React from "react";

const ScrollBox = () => {
  const box = React.useRef();
  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
  };
  const innerStyle = {
    width: "100%",
    height: "2000px",
    background: "linear-gradient(white,black)",
  };

  const scrollBottom = () => {
    box.current.scrollTop = box.current.scrollHeight - box.current.clientHeight;
  };
  const scrollTop = () => {
    box.current.scrollTop = 0;
  };
  return (
    <>
      <div style={style} ref={box}>
        <div style={innerStyle}></div>
      </div>
      <button onClick={scrollBottom}>맨 밑으로</button>
      <button onClick={scrollTop}>맨 위으로</button>
    </>
  );
};

export default ScrollBox;
