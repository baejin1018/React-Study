# useReducer

### `useState` 처럼 상태를 관리하게 될때 사용하는것

### `useReducer` 을 사용하면

- 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다
- 상태 업데이트 로직을 컴포넌트 바깥에 작성 할수 있다
- 다른 파일에 작성 후 불러와서 사용 할 수도 있다

## 사용법

```js
function reducer(state, action) {
    switch (action.type){
        case type이름:
            return 어떻게 할건지
    }
}
```

- reducer 함수 : 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다

- switch문을 사용해서 action 객체에 담긴 type에 따라 상태 업데이트 로직을 작성한다

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

- state : 컴포넌트에서 사용할 수있는 상태
- dispatch : 액션을 발생시키는 함수 `( dispatch({type: 타입이름}))`

* reducer : 상태 업데이트 로직을 담은 함수
* initialState : 초기 상태

```js
const 함수이름 = () => {
  dispatch({ type: "타입이름" });
};
```

#### 이렇게 액션이 필요한 함수에 `dispatch`를 호출하고 type이 담긴 객채 형태를 넣어서 사용한다
