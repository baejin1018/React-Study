const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".jsx", ".js"], //이걸 쓰면 entry app 여기에서 확장자 생략갸능
  },
  entry: "./client.js",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
