# useEffect

### Hooks 사용하여 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때 (사라질 때), 업데이트 될 때 (특정 props가 바뀔 때) 특정 작업을 처리할때 사용

## 사용방법

#### `useEffect` 를 사용할때는 `첫번째 파리미터`에는 `함수` `두번째 파라미터에`는 `의존 값이 들어있는 배열(deps)`를 넣는다

### 마운트 언마운트 관리

```js
useEffect(() => {
  console.log("마운트");
  return () => {
    console.log("언마운트");
  };
}, [deps]);
```

### 마운트에는 주로

- props 로 받은 값을 컴포넌트의 로컬 상태로 설정
- 외부 API 요청 (REST API 등)
- 라이브러리 사용
- setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약

### 언마운트에는 주로

- setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)

* 라이브러리 인스턴스 제거

### deps

#### 만약 deps 값이 비우게 된다면 컴포넌트가 처음 나타날때만 useEffect에 등록한 함수가 호출

```js
useEffect(() => {
  console.log("마운트");
  return () => {
    console.log("언마운트");
  };
}, []);
```

#### deos 값이 있다면 처음 나타날때도 호출이 되고 지정한 값(deps) 가 변경될때 마다 함수가 호추이 된다

```js
useEffect(() => {
  console.log("마운트");
  return () => {
    console.log("언마운트");
  };
}, [deps]);
```

#### 두번쨰 배열을

```js
useEffect(() => {
  console.log("마운트");
  return () => {
    console.log("언마운트");
  };
});
```

#### 이런식으로 생략해버리면 컴포넌트가 리렌더링 될때 마다 호출이 된다
