# 스타일링

- 일반 CSS : 컴포넌트를 스타일링 하는 가장 기본적인 방식
- Sass : 자주 사용되는 CSS 전치기중 하나 확장된 CSS 문법을 사용하여 더 쉽게 코드를 작성할수 있다
- CSS Module : CSS클래스가다른 CSS 클래스의 이름과 충돌하지 않게 파일마다 고유한 이름을 자동을 생성해 주는 옵션
- styled-components : 스타일을 자바스크립트 파일에 내장시키는 방식으로 스타일을 작성하고 스타일이 적용된 컴포넌트를 만들수 있게 해준다

## Sass 사용하기

### Sass는 CSS 전처리기로 복잡한작업을 쉽게 할수있도록 해주고 코드의 가독성을 높여 유지보수를 쉽게 해준다

### Sass에서는 .scss .sass 두가지 확장자를 지원한다

### sass는 {} 중괄호 와 ; 세미콜론을 사용하지 않는다

### scss는 기존 css 문법과 크게 다르지 않다

### sass 를 사용하기 위해서는 node-sass 라는 라이브러리를 다운받아야 한다

### 이 라이브러리는 Sass를 css로 변화해준다

### `npm add node-sass@4.14.1` 터미널에 입력 하면 다운로드 된다

### Ex => 9챕터/styling-react/src/SassComponent.jsx , SassComponent.scss

### SassComponent.scss 여길보면 utils.scss에서 변수와 믹스인을 import 하여 불러와서 사용했다

### 만약 구조가 깊어질수록 ../../../../ 이럭식으로 import 할때 상위폴더를 한참 거술러 가야 할 것이다

### 이러한 문제를 `sass-loder` 의 설정을 커스터 마이징하여 해결할수 있다

# node_nodules에서 라이브러리 불러오기

### sass의 장점은 라이브러리를 쉽게 불러와서 사용가능하다는 것이다

### 라이브러리를 불러올때 ../../../node_modules/library/styles 이런식으로 불러와도 되지만

### `~` 를 사용하면 좀더 쉽게 불러올수 있다 ~library/styles

### ~ 를 사용하면 자동으로 node_module 에서 라이브러리 티렉터리를 탐지하여 스타일을 불러올수 있다

### Ex

### 먼저 사용할 라이브러리를 설치한다

### 터미널에 `npm add open-color include-media` 입력

### 다운한후 `@import "~include-media/dist/include-media"; @import "~open-color/open-color";` 이렇게 ~ 를사용해 import 해주면 사용할수 있다

# CSS Module

### CSS Module은 CSS 불러와 사용할때 자동으로 고유한 값의 클래스이름을 만들어준다

### 사용하기위해서는 확장자 명을 .module.css 라고 해야한다

### Ex

```css
.wrapper {
  background-color: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

.something {
  font-weight: 800;
  color: aqua;
}
```

```js
import React from "react";
import styles from "./CSSModule.module.css";
const CSSModule = () => {
  return (
    <div className={styles.wrapper}>
      저는 <span className={styles.something}>CSS Moudle</span>
    </div>
  );
};

export default CSSModule;
```

### `className={styles.wrapper}` 이런식으로 사용한다

### 이 스타일을 콜솔에 찍어보면 `{wrapper: 'CSSModule_wrapper__TovIb', something: 'CSSModule_something__1YhM1'}` 이런식으로 스타일 앞뒤로 파일이름과 해시값을 붙여주어 클래스 이름을 고유하게 해준다

### 클래스 이름을 여러개 사용할때는

### `` className={`{$styles.이름} ${styles.이름}`} `` 이렇게 사용한다

# classnames

### classnames는 CSS 클래스를 조건부로 설정할때 유용한 라이브러리 이다

### npm add classnames로 설치

### Ex

```js
import classNames from "classnames";

classNames("one", "two"); //'one two'
classNames("one", { two: false }); //'one'
classNames("one", { two: true }); //'one two'

const myClass = "three";
classNames("one", { two: false }, myClass); //'one two three'
```

### 이런식으로 여러가지 파라미터를 조합해 CSS 클래슬를 설정할수 있기떄문에 조건부로 클래스를 설정할때 좋다

### CSS Module과 함께 사용하면 CSS Module 사용하기가 쉬워진다

### classnames에 내장된 `bind` 함수를 이용해 `styles.[클래스 이름]` 형태가 아닌 `cx('클래스이름','클래스이름')` 이런식으로 사용할수 있게 해준다

### Ex

```js
import React from "react";
import styles from "./CSSModule.module.css";
import classnames from "./classnames/bind";
const cx = classnames.bind(styles);
const CSSModule = () => {
  console.log(styles);
  return (
    <div className={cx("wrapper", "inverted")}>
      저는 <span className={styles.something}>CSS Moudle</span>
    </div>
  );
};

export default CSSModule;
```
