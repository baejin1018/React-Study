# useMemo

## 성능 최적화를 위해 사용

#### Memo 는 memoized 를 의미한다

#### 메모한다는 것은이전에 계산 한 값을 재사용한다는 의미를 가지고 있다 (결과값 기억)

#### 불필요할때에도 리렌더링 하여서 자원이 낭비되는것을 막기 위해 사용 한다

## 사용법

```js
useMemo(() => 첫번째파라미터, [두번쨰 파라미터]);
```

- #### 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수
- #### 두번째 파라미터에는 deps 배열
- #### 두번째파라미터 안에 넣은 내용이 바뀌면 우리가 등록한 함수를 호출해서 값을 연산하고 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용
