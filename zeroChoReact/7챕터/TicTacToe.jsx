import React, { useReducer, useState } from "react";
import Table from "./Table";

const TicTacToe = () => {
  const [state, dispatch] = useReducer;
  //   const [winner, setWinner] = useState("");
  //   const [turn, setTurn] = useState("O");
  //   const [table, setTable] = useState([
  //     ["", "", ""],
  //     ["", "", ""],
  //     ["", "", ""],
  //   ]);
  return (
    <>
      <Table />
      {winner && <div>{winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
