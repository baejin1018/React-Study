# Recoil

## Recoil 이란?

Recoil은 React 프로젝트를 위한 많은 전역 상태관리 라이브러리들 중 하나다  
다른 라이브러리(Redux, Mobx)와는 달리 React 전용이며 React에 최적화되어 되어있다

## Recoil 설치 적용법

설치

```
yarn add recoil
npm i recoil
```

적용법

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
```

App.js의 <App/>컴포넌트를 <RecoilRoot>로 감싸주면된다

## 주요개념

# atoms

![title](https://tech.osci.kr/wp-content/uploads/2022/06/3-1024x540.png)
`atom` 을 쉽게 이해한다면 비눗방울로 추상화 할 수 있다  
 우리가 만드는 Web Application 을 구조화 한다면 그 구조의 상단에 atom 이 비눗방울 처럼 둥둥 떠다니고 있다고 추상화 할 수 있고 만약 개발을 하다가 어떤 비눗방울 (상태) 이 필요하다면 해당하는 비눗방울만 쏙 빼서 쉽게 사용할 수 있다

`atom`은 우리가 전역으로 사용할 상태를 담는다

```js
import { atom } from "recoil";

const count = atom({
  key: "counting",
  default: 0,
});

export { count };
```

이런식으로 atom을 만들고 atom안에는 atom을 구별할 key와 기본값인 default 를 넣어야 한다

```js
import { useRecoilState } from "recoil";
import { counting } from "./stores/a";
function App() {
  const [count, setCount] = useRecoilState(counting);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </>
  );
}

export default App;
```

useRecoilState 라는 간단한 hook 을 통해서 atom 을 가져와서 값을 추적하고, 값을 변경할 수 있다

```js
const setCount = useSetRecoilState(counting); //useSetRecoilState : 전역상태의 setter 함수만을 활용하기 위해 사용
const count = useRecoilValue(counting); //useRecoilValue :전역상태의 state 상태값만을 참조하기 위해 사용
```

이런식으로 따로따로 분리해서 사용할 수도 있다

# selector

Selector는 atom 혹은 다른 Selector 상태를 입력받아 동적인 데이터를 반환하는 순수함수다

## get

Selector를 설정할 때도, Recoil의 selector() 메서드를 통해 등록하면 된다. 기본적으론, key와 get 2개의 프로퍼티를 설정한다.

key : 고유한 key 값  
get : Selector 순수함수. 사용할 값을 반환하며, 매개변수인 콜백객체 내 get() 메서드로 다른 atom 혹은 selector를 참조한다

## set

set 함수(프로퍼티) : 쓰기 가능한 Selector

Selector에 set을 설정하게 되면, 쓰기 가능한 모드로 변경된다. set은 콜백객체, 새로운 값 2가지를 각각 매개변수로 받는다

콜백객체 내에는 마찬가지로 set() 메서드가 존재하며, 이는 다른 atom들을 새로운 값으로 세팅하기 위해 사용된다

set 메서드를 쓸 때 유의할 점은 본인 스스로를 수정할 수 없다
