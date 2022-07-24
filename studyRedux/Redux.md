# Redux
리덕스에는 `스토어`, `리듀서` ,`액션`이 있다   
스토어 : 애플리케이션의 상태(state) 가지고 있는것   
리듀서 : 스토어에 있는 상태를 변화시키는 함수   
액션 : 사용자의 입력, 등 상태변화를 일으키는 현상

### 스토어 초기상태
```js
const initalState ={
    tasks:[]
}
```
### 리듀서 정의   
```js
const taskReducer =(state = intialState,action) =>{
    switch(action.type){
        case 'ADD_TASK': 
            return{
                ...state,
                tasks:state.tasks.concat([action.task])
            }
    };
    default:
        return state;
}
```
리듀서의 첫번째 파라미터에는 현재상태를 ㅏ타내는 state 객체를 전달한다   
초기상태로 intialState 로 지정   
두번째 파라미터에는 어떤 조작을 할지 나타내는 action 객체를 전달한다

### 플럭스 표준 액션
액션을 표준화 한 것
* payload : 액션에 따라 데이터로 사용할 수 있다. 객ㅊ체 자료형을 사용하는것이 일반적이고 error 속성이 true면 Error 객체를 지정해야한다
* error : 오류를 표현하고 싶은 경우 true로 설정
* meta : payload 외의 정보를 액션에 포함시키고 싶은경우 사용

### 액션 크리에이터 정의
액션을 생겅하는 함수
```js
const addTask =(task) =>({
    type: 'ADD_TASK',
    payload:{
        task
    }
})
```
태스크로 추가하고 싶은 task를 매겨변수로 받고 액션객체를 리턴하면 된다