import React, { useState } from "react";
import Try from "./Try";

function getNumbers() {
  //숫자 4개를 겹치지 않고 랜덤하게 뽑는함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]; // chosen = 1,
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    /*const { value, tries, answer} =this.state; 이렇게 쓰면 value,tries,answer 를 쓸때this.state생략가능*/
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런!");
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: "홈런!" }];
      });
      alert("게임을 다시 시작합니다!");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    } else {
      //답틀렸을때
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 10) {
        //10번이상
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")} 였습니다`);
        alert("게임을 다시 시작합니다!");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => [
          ...prevTries,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다`,
          },
        ]);
        setValue("");
      }
    }
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>재미있는 야구게임(hooks)</h1>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도 {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          //반복문
          return <Try key={`${i + 1}차시도 :`} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default NumberBaseball;
