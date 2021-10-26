# 라이프 사이클 메서드

### `클래스형 컴포넌트에서 만 사용할수 있다`

### 라이프사이클은 총 9가지이다

### `Will` 접두사가 붙은 메서드는 어떤 작업을 작동하기 `전`에 실행되는 메서드이다

### `Did` 접두사가 붙은 메서드는 어떤 작업을 작동하기 `후`에 실행되는 메서드이다

<br>

## 라이프 사이클은 총 세가지 즉 `마운트`, `업데이트`, `언마운트`로 나눠진다.

<br>

- ## 마운트
  ### DOM이 생성되고 윕 브라우저상에 나타나는것
  - `constructor` : 컴포넌트를 새로 만들 때 마다 호출되는 클래스 생성자 메서드
  - `getDerivedtateFromProps` : props에 있는 값을 state에 넣을때 사용하는 메서드
  - `render` : 준비한 UI 를 랜더링하는 메서드
  - `componentDidMount` : 컴포넌트가 웹 브라우저상에 나타난후 호출하는 메서드

<br>

- ## 업데이트

  ### 컴포넌트는 총 4가지 경우에 엄데이트 합니다

  1.  props 가 바뀔 때
  2.  state 가 바뀔 때
  3.  부모 컴포넌트가 리렌더링될 때
  4.  this.forceUpdate로 강제로 렌더링을 트리거 할때

  <br>

  - `getDerivedStateFromProps` : 이 메서드는 마운트 과정에서도 호출됨 , 업데이트가 시작되기 전에도 호출, props 의 변화에 따라 state 값에도 변화를 주고 싶을때 사용
  - `shouldComponentUpdate` : 컴포넌트가 리렌더링을 해야할지 말아야 할지를 결정하는 메서드 <br>
    true,false값 반환 true 를 반환하면 다음 라이프 사이클 메서드를 계속 실행 false를 반환하면 작업을 중지
  - `render` : 컴포넌트를 리렌더링함
  - `getSnapshotBeforeUpdate` : 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
  - `conponentDidUpdate` : 컴포넌트의 업데이트 작업이 끝난후 호출하는 메서드

<br>

- ## 언마운트
  ### 마운트의 반대과정 컴포넌트를 DOM에서 제거하는 것
  - `componentWillUnmount` : 컴포넌트가 웹 브라우정상에서 사라지기 전에 호출하는 메서드

<br>
