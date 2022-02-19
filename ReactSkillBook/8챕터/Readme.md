# Hooks

# useState

### 함수형 컴포넌트에서 상태관리를 할때 사용

### Ex

```js
import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>현재 카운터 값 : {value}</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
```

### 버튼을 눌러 숫자를 더하고 빼는 코드이다

### `const [value, setValue] = useState(0);`

### 이렇게 state를 만든다

### `useState()` 에는 기본값을 넣어준다

### 이 함수를 호출하면 배열을 반환하는데 첫번째 원소는 상태값 두번째 원소는 상태를 설정하는 함수이다

### 하나의 useState는 하나의 상태값만 관리할수 있기때문에 관리해야할 상태가 여러개라면

```js
const [value, setValue] = useState(0);
const [value2, setValue2] = useState(0);
const [value3, setValue3] = useState(0);
```

### 이런식으로 useState를 여러개 사용하면 된다

# useEffect

### 컴포넌트가 리랜더링 될때마다 특정 작업을 수행하도록 설정하는 Hooks

### 클래스형의 라이프 사이클을 합쳐놓은 것과 비슷

## 마운트 될떄만 실행

```js
import React, { useEffect } from "react";

const Counter = () => {
  useEffect(() => {
    console.log("마운트");
  }, []);
  return <div></div>;
};

export default Counter;
```

### 이렇게 하면 마운트 될때 콘솔에 문구가 나타난다

## 특정값이 업데이트 될때만 실행

```js
useEffect(() => {
  console.log("마운트");
}, [여기]);
```

### 두번째 파라미터로 전달되는 배열안에 값을넣어주면 그 값이 변경될때마다 실행된다

### Ex

```js
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div>
      <p>현재 카운터 값 : {value}</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
```

### 버튼을 눌러 value의 값이 변경될때마다 콘솔에 value의 값이 출력된다

## 뒷정리(clean up)

### 컴포넌트가 언마운트 되기 전이나 업데이트 되기전에 작업을 수행

```js
useEffect(() => {
  console.log(value);
  return () => {
    //뒷정리 함수 (clean up)
    log("clean up");
  };
}, [value]);
```

### return 으로 반환해준다

## 언마운트 될때만

```js
useEffect(() => {
  console.log("effect");
  return () => {
    log("unmount");
  };
}, []);
```

### 두번째 파라미터에 비어있는 배열을 넣으면 언마운트 될때만 실행된다
