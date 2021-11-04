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

  module: {
    rules: [
      {
        test: /\.jsx?/, //js 파일과jsx파일에 이 룰을 적용
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },

  output: {
    //출력
    path: path.join(__dirname, "wordRelay"),
    filename: "app.js",
  },
};
