# 컴포넌트

### 리액트의 컴포넌트 선언방식은 두가지다 하나는 `함수형 컴포넌트` 다른하나는 `클래스형 컴포넌트` 이다

# 함수형 컴포넌트

### src 폴더에 MyComponent.jsx 라는새로운 파일을 만들고 밑의 코드를 친다

```js
import React from "react";

const MyComponent = () => {
  return <div>컴포넌트</div>;
};

export default MyComponent;
```

### 여기서 `=()=>{}`는 `화살표 함수` 라는 것인데 함수를 작성할때 function 대신 사용할수 있다

### `export default MyComponent;` 이 코드는 다른파일에서 import 할때 위에서 선언한 MyComponent를 불러오도록 설정 하는 것이다

```js
import React from "react";
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
```

### 그리고 `App.js` 에 MyComponent를 import 해준후 `<MyComponent />` 이런식으로 코드를 작성해주면 브라우저에 MyComponent에 쓴 내용이 렌더링 될 것이다

# props

### porps는 컴포넌트 속성을 설정할때 사용한다

### Ex

### MyComponent.jsx

```js
import React from "react";

const MyComponent = (props) => {
  return <div>컴포넌트 {props.name}</div>;
};

export default MyComponent;
```

### props는 이렇게 함수의 파라미터로 받아와 사용할수 있다

### 아직까지는 name 이라는 props를 설정하지 않아 아무것도 보이지 않을 것이다

### 위에 코드처럼 props를 받으면되고 props 설정은 부모컴포넌트인 App.js에서 한다

```js
import React from "react";
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent name="React" />
    </>
  );
}

export default App;
```

### 이런식으로 props를 설정해주면된다

### 이렇게 다 적으면 브라우저에 컴포넌트 React 라는 글자가 보일것이다

## props 기본값 설정

### 만약 props가 설정되지 않았다면 아무것도 안보이는것이 아닌 `defaultProps` 를 이용하여 props가 설정되지 않았을때 보여줄 기본값을 설정할수 있다

### Ex

```js
import React from "react";

const MyComponent = (props) => {
  return <div>컴포넌트 {props.name}</div>;
};
MyComponent.defaultProps = {
    name : "기본값"
}

export export default MyComponent;
```

### 이렇게 적은후 App.js에 설정한 props값을 지우면 브라우저에 컴포넌트 기본값 이라고 나올것이다

## 태그 사이의 내용을 보여주는 props

### `children` 이라는 props를 사용하여 태그사이의 내용을 보여줄수도 있다

### Ex

```js
import React from "react";
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent>children</MyComponent>
    </>
  );
}

export default App;
```

### 먼저 App.js코드를 이렇게 수정해주고

```js
import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      컴포넌트 {props.name}
      children 값 {props.children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본값",
};

export default MyComponent;
```

### MyComponent 도 이렇게 수정해주면

### 브라우저에 children값 children 이라는 글자가 보일것이다

# 비구조 할당

### 매번 props. 이렇게 쓰기 귀찮으니 비구조 할당이라는 문법을 사용하여 이러한 귀찮음을 해결할수 있다

### Ex

```js
import React from "react";

const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      컴포넌트 {name}
      children 값 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본값",
};

export default MyComponent;
```

### 이런식으로 할수도 있고

```js
import React from "react";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      컴포넌트 {name}
      children 값 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본값",
};

export default MyComponent;
```

### 파라미터 부분에서 바로 비고조화 할 수도 있다

## props 검증

### `propsTypes`을 이용해 props타입을 지저알수 있다

### `propsTypes`를 사용 할려면 `import PropTypes from 'prop-types'` 이렇게 import 를 해야한다

### Ex

```js
import React from "react";
import propTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      컴포넌트 {name}
      children 값 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본값",
};

MyComponent.propTypes = {
  name: propTypes.string,
};

export default MyComponent;
```

```js
MyComponent.propTypes = {
  name: propTypes.string,
};
```

### 이런식으로 props 의 type을 설정해줄수 있고 만약 설정한 type이 아니면 console에 경고 메시지를 출력한다

## 필수 propTypes 설정

### propTypes 뒤에 `isRequired`를 붙이면 propType을 필수로 설정해야되는 props가 된것 이다

### Ex

```js
import React from "react";
import propTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      컴포넌트 {name}
      children 값 {children}
    </div>
  );
};

MyComponent.propTypes = {
  name: propTypes.string,
};

export default MyComponent;
```

```js
MyComponent.propTypes = {
  name: propTypes.string.isRequired,
};
```

### 이런식으로 코드작성후 name props 을 설정하지 않으면 콘솔에 경고가 나타나게 된다

<br/>

# State

### `State`는 컴포넌트 내부에서 바뀔수있는 값을 의미

## 클래스형 컴포넌트의 State

### Ex

```js
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```

### state를 이용해서 버튼을 누르면 +1 씩 더하는 코드이다

```js
constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
```

### 이렇게 state의 초기값을 설정해주고

```js
state = {
  number: 0,
};
```

### 이런 방법으로도 설정해줄수 있다

```js
this.setState({ number: number + 1 });
```

### setState를 이용하여 state 값을 변경해준다

<br/>

# 함수형 컴포넌트 useState

### 함수형 컴포넌트에서는 useState 로 기본값을 정하고 setState로 값을 변경한다

### Ex

```js
import React, { useState } from "react";

const Hello = () => {
  const [mes, setMes] = useState("");
  const onClickEnter = () => setMes("안녕하세요");
  const onClickOut = () => setMes("안녕히 가세요");
  return (
    <div>
      <h1>{mes}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickOut}>퇴장</button>
    </div>
  );
};

export default Hello;
```

### 처음에 `const [mes, setMes] = useState("");` 이렇게 useState를 통해 초기값을 설정해주고

### ` setMes("안녕히 가세요");` 이런식으로 값을 변경해준다
