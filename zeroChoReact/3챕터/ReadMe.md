# import와 require

### 둘 다 모듈 키워드, 외부 파일이나 라이브러리를 불러올 때 사용한다.

### require는 NodeJS에서 사용되는 CommonJS 키워드, import는 ES2015에서 새로 도입된 키워드

### Babel같은 ES6 코드 변환 도구를 사용할 수 없다면 require 키워드를 사용해야 한다.

<br/>

## CommonJS (노드모듈 시스템)

###

```js
const React = require('react);
exports.hello = 'hello';
module.exports = hello;
```

### 웹팩을 노드로 돌리기 때문에 원래 위에 처럼 사용해야하는데 바벨이 변경해주어 import 를 사용가능하다.

<br/>

## 구조 분해

```js
export const hello = "hello";
```

- ### `import {hello}`이렇게 사용
- ### 여러번 사용가능
- ### `import {ex1,ex2}` 이런식으로 한번에 여러개도 사용 가능

```js
export default hello = "hello";
```

- ### import hello 이렇게 사용
- ### default 는 한번만 사용가능
