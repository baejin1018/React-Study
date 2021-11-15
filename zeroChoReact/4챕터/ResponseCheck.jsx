import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요",
    result: [],
  };

  onClickScreen = () => {};

  renderAverage = () => {
    return this.state.result.length === 0 ? null : (
      <div>
        평균 시간:
        {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms
      </div>
    );
  };
  render() {
    //랜더 안에 for if를 쓸수는 있지만 너무 지저분해짐
    return (
      <>
        <div
          id="screen"
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;
