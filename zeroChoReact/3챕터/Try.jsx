import React, { PureComponent } from "react";

class Try extends PureComponent {
  render() {
    /*const {tryInfo} = this.props; 이걸쓰면 밑에 주석처럼 this.props를 생략가능하다*/
    return (
      <li>
        <div>{this.props.tryInfo.try}</div>
        {/* <div>{tryInfo.try}</div> */}
        <div>{this.props.tryInfo.result}</div>
        {/* <div>{tryInfo.result}</div> */}
      </li>
    );
  }
}

export default Try;
