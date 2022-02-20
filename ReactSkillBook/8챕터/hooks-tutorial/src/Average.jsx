import React, { useCallback, useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균 구하는중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [num, setNum] = useState();

  const onChange = useCallback((e) => {
    setNum(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    const nextList = list.concat(parseInt(num));
    setList(nextList);
    setNum("");
  }, [num, list]);

  const onClickDel = () => {
    setList([]);
  };

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input type="text" value={num} onChange={onChange} />
      <button onClick={onClick}>등록</button>
      <ul>
        {list.map((value, index) => {
          <li key={index}>{value}</li>;
        })}
      </ul>
      <b> 평균값 : </b> {avg}
      <button onClick={onClickDel}>초기화</button>
    </div>
  );
};

export default Average;
