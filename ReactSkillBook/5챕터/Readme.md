# ref

### HTML에서 id로 DOM에 이름을 다는것 처럼 DOM에 이름을 다는것

### 리액트 컴포넌트에서는 id를 사용할수는 있지만 컴포넌트를 여러번 사용하게되면 DOM 에 id는 유일 해야한다는 규칙이 깨져 잘 사용하지 않는다

### DOM에 직접 접근할때 사용 (특정 input에 포커스 주기, 스크롤박스 조작, Canvas 요소에 그림그리긴)

## ref 사용법

## 1. 콜백 함수를 통한 ref 설정

```js
<input
  ref={(ref) => {
    this;
  }}
/>
```

##### 콜백함수 : 다른 함수의 인자로써 이용되는 함수

## 2. createRef를 통한 ref 설정

```js
import React, { Component } from "react";

class Ref extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };
  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default Ref;
```

### 리액트에 내장되어있는 createRef라는 함수를 사용하면 된다

## 3. Hooks Ref

```js
const Ref = () => {
  // ref를 위한 변수 선언
  const inputRef = React.useRef(null);

  //  커서 이동을 원할 때,
  inputRef.current.focus();

  return <input ref={inputRef} />;
};
```

### Ex 특정 input에 focus 하기

```js
import React, { useRef, useState } from "react";
import "./Validation.css";
const Validation = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState("");
  const [validated, setValidated] = useState("");
  const input = useRef();

  const onChangeInput = (e) => {
    setPassword(e.target.value);
  };

  const onClickBtn = () => {
    setClicked(true);
    setValidated(password === "000");
    input.current.focus();
  };
  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={onChangeInput}
        className={clicked ? (validated ? "succes" : "failure") : ""}
        ref={input}
      />
      <button onClick={onClickBtn}>검증하기</button>
    </div>
  );
};

export default Validation;
```

### 버튼을 눌렀을때 input 이 포커스 되는 코드

<br/>

# 컴포넌트에 ref 달기

### 컴포넌트 내부에 있는 DOM을 외부에서 사용할때 쓴다

### Ex

```js
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
  return (
    <>
      <div style={style} ref={box}>
        <div style={innerStyle}></div>
      </div>
      <button onClick={scrollBottom}>민 밑으로</button>
    </>
  );
};

export default ScrollBox;
```

### 컴포넌트에 ref를 다는것을 이용하여 컴포넌트 스크롤바를 외부에서 조종할수 있게 한 코드이다
