const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"], //이걸 쓰면 entry app 여기에서 확장자 생략갸능
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
  },
};
