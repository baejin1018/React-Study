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

# useReducer

### useState보다 더 다야안 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 할때 사용

### 현재 상태 , 업데이트에 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환한다

```js
function reducer(state,action){
    switch(action.type){
        case '액션 이름':
            return 반환할 값
    }
}
```

### 액션 값 형태

```js
{
  type: "타입이름";
}
```

### Ex

```js
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { value: state.value + 1 };
    case "minus":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <p>현재 카운터 값 : {state.value}</p>
      <button onClick={() => dispatch({ type: "plus" })}> +1 </button>
      <button onClick={() => dispatch({ type: "minus" })}> -1 </button>
    </>
  );
};

export default ReducerCounter;
```

### useReducer를 이용한 카운터

### `useReducer(reducer, { value: 0 });` useReducer 의 첫번째 파라미터는 리듀스 함수를 넣고 두번쨰에는 해당 리듀서의 기본값을 넣어준다

### useReducer를 사용하면 state와 dispatch를 받아온다

### `dispatch({ type: "plus" })}` 이렇게 dispatch는 액션을 발생시키는 함수이다

# useMemo

### 값을 기억하여 성능 최적화를 해준다

### Ex

```js
import React, { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균 구하는중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [num, setNum] = useState();

  const onChange = (e) => {
    setNum(e.target.value);
  };

  const onClick = (e) => {
    const nextList = list.concat(parseInt(num));
    setList(nextList);
    setNum("");
  };

  const onClickDel = () => {
    setList([]);
  };

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input type="text" value={num} onChange={onChange} />
      <button onClick={onClick}>등록</button>
      <ul>
        {list.map((value, index) => {
          <li key={index}>{value}</li>;
        })}
      </ul>
      <b> 평균값 : </b> {avg}
      <button onClick={onClickDel}>초기화</button>
    </div>
  );
};

export default Average;
```

### `useMemo(() => getAverage(list), [list]);` 이런식으로 사용

### 두번째 파라미터의 값이 변경되지 않으면 그전에 값을 기억하여 다시 연산하지 않는다

# useCallback

### use Callback는 useMemo와 비슷하다

### 렌더링 성능최적화할때 사용

### 함수를 기억

### Ex

```js
import React, { useCallback, useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균 구하는중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [num, setNum] = useState();

  const onChange = useCallback((e) => {
    setNum(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    const nextList = list.concat(parseInt(num));
    setList(nextList);
    setNum("");
  }, [num, list]);

  const onClickDel = () => {
    setList([]);
  };

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input type="text" value={num} onChange={onChange} />
      <button onClick={onClick}>등록</button>
      <ul>
        {list.map((value, index) => {
          <li key={index}>{value}</li>;
        })}
      </ul>
      <b> 평균값 : </b> {avg}
      <button onClick={onClickDel}>초기화</button>
    </div>
  );
};

export default Average;
```

```js
const onClick = useCallback(() => {
  const nextList = list.concat(parseInt(num));
  setList(nextList);
  setNum("");
}, [num, list]);
```

### 이렇게 사용

### useCallback의 첫번쨰 파라미터는 생성하고 싶은 함수, 두번쨴,배열을 넣으면된다

### 두번쨰 파라미터안에 넣은 값이 변경될따마다 함수를 새로 만든다

### 만약 값이 변경되지 않으면 함수를 새로만들지 않아 성능 최적화가 된다

# useRef

### 함수형 컴포넌트에서 ref를 쉽게 사용할수 있도록 해줌

```js
const Ref = () => {
  // ref를 위한 변수 선언
  const inputRef = React.useRef(null);

  //Ex  커서 이동을 원할 때,
  inputRef.current.focus();

  return <input ref={inputRef} />;
};
```

### 이렇게 사용

# 커스텀 Hook

### 커스텀 훅이란 useMemo,useRef...들 처럼 내장되있는 훅이 아닌 개발자가 스스로 커스텀 한 훅을 말한다
