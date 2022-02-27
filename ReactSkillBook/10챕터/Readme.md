# 리액트 아이콘

### https://react-icons.github.io/react-icons/icons?name=md

### 이 페이지에 들어가면 많은 아이콘이 있다

### 여기서 사용하고 싶은 아이콘을 고른후 `npm add react-icons`하고 아래와 같이 import 하여 사용할수 있다

```js
import {아이콘 이름} fromm 'react-icons/md';
```

# 컴포넌트 성능 최적화 하기

## 리렌더링이 되는 상황

### 먼저 컴포넌트가 언제 리렌더링이 되는지 부터 알아야 한다

### 1. 자신이 받은 props가 변경될때

### 2. 자신의 state가 바뀔때

### 4. forceUpdate 함수가 실행될때

### 이러한 상황에 리렌더링이 되는데 굳이 리렌더링이 불 필요한 부분을 리렌더링 되지 않게 하여 최적화를 한다

## 1. React.memo를 사용하여 최적화

```js
const TodoListltem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListltem);
```

### 이렇게 React.memo로 컴포넌트를 감싸주면 이 컴포넌트는 todo,onRemove,onToggle이 변경되지 않으면 리렌더링이 되지 않는다

## 2. useState의 함수형 업데이트 사용하기

### setState 파라미터에 새로운 상태를 넣는것이 아니라 상태 업데이트를 어떻게 할지 넣어주는 것이다 (setState를 동기적으로 사용할수있게된다)

```js
setState((state) => state + 1);
```

### setState 사용할때 앞에 `state이름=>` 이렇게 넣어주면 함수형 업데이트를 사용할수 있다

### 함수형 업데이트는 useCallback과 함께 props로 전될된 함수를 최적화할 때도 유용하게 사용된다

```js
const [number, setNumber] = useState(0);
const onIncrease = useCallback(
  () => setNumber((prevNumber) => prevNumber + 1),
  []
);
```

### 이렇게 함수형 업데이트와 사용할때는 useCallback 두번째 파라미터에 아무것도 안넣어도된다

## 3.useReducer 사용하기

### useState의 함수형 업데이트를 사용안하고 useReducer를 사용해도 함수가 계속 새로워지는 문제를 해결할수 있다

# 불변성의 중요성

### 리액트에서 상태를 업데이트 할때 불변성을 지키는 것은 매우 중요하다

### 불변성을 지키지 못ㅎ면 객체의 내부값이 새로워져도 바뀐것을 감자하지 못하여 업데이트,최적화를 할수 없다

### 불변성을 지키기위해서 `...(앝은복사)` 를 사용한다

### ... 은 객체 내부값이 완전히 새로 복사되지 않고 가장 바깥쪽에 있는 값만 복사가 된다
