const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

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
          presets: [
            //플러그인들의 모음
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"], //(browserslist) , "> 5% in KR : 한국에서 사용률이 5 % 넘는 브라우저 지원,  last 2 chrome versions : 만약 크롬버전이 70이라고하면 69와 70만 호횐되게한다는 말
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist/" },
    static: { directory: path.resolve(__dirname) },
  },
};
