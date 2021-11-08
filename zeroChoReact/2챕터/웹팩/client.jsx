const React = require("react"); //react를 불러온다
const ReactDom = require("react-dom"); //react-dom를 불러온다

const WordRelay = require("./WordRelay");

ReactDom.render(<WordRelay />, document.querySelector("#root"));
