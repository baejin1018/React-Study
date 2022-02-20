import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { value: state.value + 1 };
    case "minus":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <p>현재 카운터 값 : {state.value}</p>
      <button onClick={() => dispatch({ type: "plus" })}> +1 </button>
      <button onClick={() => dispatch({ type: "minus" })}> -1 </button>
    </>
  );
};

export default ReducerCounter;
