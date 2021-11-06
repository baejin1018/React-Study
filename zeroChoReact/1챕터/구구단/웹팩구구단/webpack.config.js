const path = require("path");
const { webpack } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"], //이걸 쓰면 entry app 여기에서 확장자 생략갸능
  },
  entry: {
    // 입력
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, //확장자가 jsx인지 확인
        loader: "babel-loader",
        options: {
          presets: [
            // presets: 플러그인들의 모음
            [
              "@/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"], //(browserslist) , "> 5% in KR : 한국에서 사용률이 5 % 넘는 브라우저 지원,  last 2 chrome versions : 만약 크롬버전이 70이라고하면 69와 70만 호횐되게한다는 말
                },
              },
            ],
            "@babel/preset-react",
          ],
          Plugins: [new webpack.LoaderOptionsPlugin({ debug: true })], //웹팩에서 기본적으로 적용해주는것 말고 다른것들을 하고싶으면 씀
        },
      },
    ],
  },
  output: {
    //출력
    filename: "app.js", //출력한 파일 이름이 app.js
    path: path.join(__dirname, "dist"),
  },
};
