import React, { useCallback, useReducer, useState } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

export const SET_TURN = "SET_TURN";
export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
      };
    case SET_TURN: {
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    }
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState); //const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)

  //   const [winner, setWinner] = useState("");
  //   const [turn, setTurn] = useState("O");
  //   const [table, setTable] = useState([
  //     ["", "", ""],
  //     ["", "", ""],
  //     ["", "", ""],
  //   ]);

  const onClickTable = useCallback(() => {
    dispatch({ type: "SET_WINNER", winner: "O" });
  }, []);

  return (
    <>
      <Table
        onClick={onClickTable}
        tableData={state.tableData}
        dispatch={dispatch}
      />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
