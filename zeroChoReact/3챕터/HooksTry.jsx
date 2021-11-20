import React, { memo } from "react";
//memo도 state나 props가 변경되었을때만 랜더링 PureComponent랑 비슷
const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;
