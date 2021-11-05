//웹팩을 이용한 구구단
const React = require("react");
const GuGuDan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const inputRef = React.useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onClickButton = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult((prevResult) => {
        return "정답:" + value;
      });
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        {first} X {second} = ?
      </div>
      <from>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button onClick={onClickButton}>입력!</button>
      </from>
      <div id="result">{result}</div>
    </> //React.Fragment 생략
  );
};

module.exports = GuGuDan;
