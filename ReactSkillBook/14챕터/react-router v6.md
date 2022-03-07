# react-router v6

##### 참고 https://velog.io/@velopert/react-router-v6-tutorial

## 라이브러리 설치

### yarn : `yarn add react-router-dom`

### npm : `npm i react-router-dom`

## 라우터 적용 방법

### 먼저 라우터를 적용할때는 index.js 파일에서 react-router-dom를 임포트 한후 내장되어 있는 BrowserRouter를 사용하여 감싸줘야 한다

```js
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```
