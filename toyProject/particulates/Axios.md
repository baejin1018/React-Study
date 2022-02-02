# Axios 사용하기

## 서버에 요청을 보내는 `request`

- GET : 서버에서 어떤 데이터를 가져와서 보여준다
- POST : 서버로 데이터를 보낸다
- PUT : 데이터베이스 내부 내용 갱신한다
- DELETE : 데이터베이스 내부 내용 삭제한다

```js
axios({
  //request
  method: "get",
  url: "url",
  responseType: "type",
}).then(function (response) {
  // response Action
});
```

이렇게 위에 4가지 메소드를 사용하기 위해서는

- 메소드 종류
- url 주소
- data (선택)
- params (선택)

이러한 정보를 같이 보내야한다
