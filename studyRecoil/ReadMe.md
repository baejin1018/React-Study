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

- atoms
- selector
