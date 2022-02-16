# 이벤트 핸들링

### 리액트의 이벤트 시스템은 HTML과 사용법이 비슷하다

## 이벤트 사용시 주의 사항

## 1. 이벤트 이름은 카멜 표기법으로 작성 (onclick(X) onClick(O))

## 2. 아벤트에 함수형태의 값을 전달

## 3. DOM 요소에만 이벤트 설정가능 (div,button,span,...)

# onChange

### onChange는 변할때 마다 실행되는 이벤트이다

### Ex

```js
import React from "react";

const EventPractice = () => {
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default EventPractice;
```

### 이렇게 코드를 작성하면 input 에 글자를 적을때 마다 콘솔에 값이 보일것이다

## 여기서 state에 input 값을 담을수도 있다

```js
<input
  type="text"
  name="message"
  value={mes}
  onChange={(e) => {
    setMes(e.target.value);
  }}
/>
```

### state를 만들어주고 onChange 부분을 이런식으로 작성해 준다면 내가 input에 적은 글자를 state 에 담아줄수 있다

# onClick

### 클릭하면 실행되는 이벤트

### Ex

```js
import React, { useState } from "react";

const EventPractice = () => {
  const [mes, setMes] = useState("");
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        value={mes}
        onChange={(e) => {
          setMes(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert(mes);
          setMes("");
        }}
      >
        초기화
      </button>
    </div>
  );
};

export default EventPractice;
```

### 버튼을 만들어고 onClick 이벤트를 이용하여 클릭하면 state 값을 비워주는 코드를 작성 해보았다

```js
import React, { useState } from "react";

const EventPractice = () => {
  const [mes, setMes] = useState("");
  const onChangeInput = (e) => {
    setMes(e.target.value);
  };
  const onClickBtn = () => {
    setMes("");
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="message" value={mes} onChange={onChangeInput} />
      <button onClick={onClickBtn}>초기화</button>
    </div>
  );
};

export default EventPractice;
```

### 이렇게 onClick 과 onChange에 전달할 함수를 따로 빼서 만들수도 있다
