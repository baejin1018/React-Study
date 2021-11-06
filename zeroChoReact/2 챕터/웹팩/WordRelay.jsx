const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "배진영",
    value: "",
    result: "",
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.omChangeInput}
          />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
