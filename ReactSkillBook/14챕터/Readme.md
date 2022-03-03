# 외부 API를 연동하여 뉴스뷰어 만들기

# 비동기 작업의 이해

### 비동기 작업은 동기적 작업과는 다르게 하고있는 일이 끝날때까지 기다리는 것이 아니라 동시에 여러가지 작업을 할수 있다

### API 서버를 호출할때 외에도 setTimeout 같은 함수를 사용할때도 비동기로 처리한다

```js
const printMe = () => {
  console.log("HelloWorld");
};
setTimeout(printMe, 3000);
console.log("대기중");
```

### 이렇게 setTimeout을 사용하면 3초동안 멈추는것이 아니라 코드가실행된후 3초뒤에 printMe가 호출되는 것이다

# 콜백함수

### 콜백함수는 함수를 함수의 인자로 전달하는 것이다

# Promise

```js
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase(0)
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .catch((e) => {
    console.log(e);
  });
```

### \* `resolve,reject` : 성공 , 실패

```js
 if (result > 50) {
        const e = new Error("NumberTooBig");
        return reject(e);
```

### 50을 넘으면 에러 발생

### \* `.then` : Promise 에서 resolve된 값은 .then 을 통해 받아올수 있다

```js
.catch((e) => {
    console.log(e);
  });
```

### 에러가 발생하면 .catch를 통해 알수 있다

# async/await

### async/await 는 Promise를 더 쉽게 사용할수 있도록 해준다

### 사용하기위해서는 함수 앞부분에 async 키워드를 추가하고 해당 함수내부 Promise 앞부분에 await 키워드를 사용합니다

### 이렇게 하면 Promise가 끝날때까지 기다리고 결과값을 특정 변수애 담을수 있습니다

```js
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await icrease(result);
    console.log(result);
    result = await icrease(result);
    console.log(result);
    result = await icrease(result);
    console.log(result);
    result = await icrease(result);
    console.log(result);
    result = await icrease(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
```
