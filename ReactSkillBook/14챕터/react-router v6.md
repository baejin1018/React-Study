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

### 이런식으로 감싸준다

## Route 컴포넌트로 특정 경로에 원하는 컴포넌트 보여주기

### Route 컴포넌트 사용방법 : `<Router path="주소규칙" element={보여줄 컴포넌트}/>`

### 이 Route 컴포넌트는

```js
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
```

### 이렇게 Routes 컴포넌트 안에 포함되어야 한다+

## Link 컴포넌트를 사용하여 다른 페이지로 이동하기

### Link 컴포넌튼느 페이지를 새로 불러오는 것을 막고 History API를 통해 브라우저 주소의 경로만 바꾸게 해준다

### `<Link to="경로">링크이름</Link>`

```js
import { Link } from 'react-router-dom';

const Home = () => {
  return (ㅔ
    <div>
      <h1>홈</h1>
      <Link to="/about">소개</Link>
    </div>
  );
};

export default Home;
```

### 이렇게 Link를 쓰고 to에 경로를 적으면 App.js에 설정한 컴포넌트를 보여준다

# URL 파라미터와 쿼리 스트링

## URL 파라미터 : 주소 경로에 유동적인 값을 넣는 형태

### ID 또는 이름을 사용하여 특정 데이터를 조회할때 주로 사용한다

### Ex /profile/jin

## 쿼리스트링 : 주소의 뒷부분에 ? 문자열 이후에 key=value 로 값을 정의하며 & 로 구분을 하는 형태

### 키워드 검색 페이지네이션 정렬 병식등 데이터 조화에 필요한 옵션을 전달할때 주로 사용

### Ex /search?q=url+파라미터란&sxsrf=APq-WBveQVvtw
