const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: "Hello webpack",
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRelay; // 쪼갠 파일에서 쓰는 컴포넌트를 밖에써도 쓰게 해준느것
