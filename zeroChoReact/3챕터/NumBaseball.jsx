import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {
  //숫자 4개를 겹치지 않고 랜덤하게 뽑는함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    //splic 배열에 값 추가/제거/교체/추출
    //array.splice( start, count, [value1],[value2],...) 이렇게 사용
    //ex
    //추가 arr.splice(2,0,5);  배열의 2번째 위치에 5를 추가
    //제거 arr.splice(1,1);  배열 1번째부터 1개를 제거
    //교체 arr.splice(1,2,5); 배열 1번째부터 2개를 제거하고 숫자 5를 추가
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = (e) => {
    /*const { value, tries, answer} =this.state; 이렇게 쓰면 value,tries,answer 를 쓸때this.state생략가능*/
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      this.setState({
        result: "홈런!",
        tries: [
          ...this.state.tries,
          { try: this.state.value, result: "홈런!" },
        ],
      });
      alert("게임을 다시 시작합니다!");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      //답틀렸을때
      const answerArray = this.state.value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        //10번이상 틀렸을때
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(
            ","
          )} 였습니다`,
        });
        alert("게임을 다시 시작합니다!");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            //includes
            //배열이 특정값을 포함하고 있는지의 여부를 boolean(ture,false) 값으로 반환
            //arr.includes(valueToFind[, fromIndex]) 이렇게 사용
            //valueToFind 찾으려는 값
            //fromIndex 검색을 시작할 index 기본값은 0, 음수가 들어간다면 배열길이 + 내가 입력한 음수
            //ex const arr = [1,2];
            //arr.includes(1); ture 배열에 1이 있기때문에 ture
            //arr.includes(5); false 배열에 5가 없기 때문에 false
            //arr.includes(1,1); false arr[1]다음에는 1이 없기때문에 false
            //arr.includes(2,-1); ture 음수를 입력했으니 배열의 길이인 2 내기입력한 음수 -1 을 더하면 1이된다 배열 arr[1]에 2가 있기때문에 ture

            ball += 1;
          }
        }
        this.setState({
          tries: [
            ...this.state.tries,
            {
              try: this.state.value,
              result: `${strike} 스트라이크, ${ball} 볼입니다`,
            },
          ],
          value: "",
        });
      }
    }
  };
  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>재미있는 야구게임</h1>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도 {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            //반복문
            return <Try key={`${i + 1}차시도 :`} tryInfo={v} />;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
