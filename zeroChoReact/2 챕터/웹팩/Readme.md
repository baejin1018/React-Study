# 웹팩(webpack)이란 무엇일까?

### 웹팩은 **모듈 번들러** 라이브러리이다

#### 모듈 번들러란 여러가지 파일들을 묶어주는 것(bundler), 모듈화를 통해 네트워킹 비용 감소를 해주는 것이다

![title](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F991224375B091F2C08)

### 웹팩의 주요 개념

#### 1. Entry

- 의존성 그래프의 시작점을 웹팩에서는 엔트리(Entry)라고 한다.
- 웹팩은 엔트리를 통해서 필요한 모듈을 로딩하고 하나의 파일로 묶는다.

#### 2. Output

- 엔트리에 설정한 자바스크립트 파일을 시작으로 하나로 묶는다.
- 그후 번들된 결과물을 처리할 위치를 output에 기록한다.

#### 3. Loader

- 웹팩은 오직 JavaScript와 Json만 이해할 수 있다.
- 로더는 다른 Type의 파일(img, font, stylesheet 등)을 웹팩이 이해하고 처리 가능한 모듈로 변환 시키는 작업을 한다.

#### 4. Plugin

- 로더가 파일단위로 처리하는 반면 플러그인은 번들된 결과물을 처리한다.
- 로더가 변환하는 동안 플러그인은과 같은 일을 진행할 수 있다.

<br>

# 웹팩 설치하기

### 1. npm init 후 package이름 정하기

### 2. 터미널을 킨다음 npm i react react-dom (react와 reactdom 설치) 입력

### 3. npm i -D webpack webpack-cli 입력 (npm i -D에 -D는 개발용으로만 쓴다는 의미)

### 4. webpack.config.js 파일과 client.jsx 파일을 만든다

### 5. webpack.config.js 파일에 밑에 코드 입력

```js
module.exports = {};
```

### 6. client.js 파일에 밑에 코드 입력

```js
const React = require("react");
const ReactDom = require("react-dom");
```
