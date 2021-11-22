import React, { Component } from "react";

function getWinNumbers() {
  console.log("getWinNimbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
}

class Lotto extends Component {
  state = {};
  render() {}
}

export default Lotto;
