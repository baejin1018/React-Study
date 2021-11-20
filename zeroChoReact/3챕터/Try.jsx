import React, { PureComponent } from "react";
// PureComponent
//현재 state, props와 바뀔 state, props를 비교하여 변경된 것이 있을때는 true를 return 해서 리렌더링,변경된 것이 없을때는 false를 리턴
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
