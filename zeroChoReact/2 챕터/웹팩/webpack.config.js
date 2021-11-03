const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스: production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    //입력
    app: ["./client"],
  },
  output: {
    //출력
    path: path.join(__dirname, "끝말잇기"),
    filename: "app.js",
  },
};
