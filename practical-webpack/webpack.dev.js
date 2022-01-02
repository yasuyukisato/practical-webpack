const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const path = require("path");

// 開発用の設定;
module.exports = merge(commonConfig, {
  // モードを指定
  // develepmentとproductionのモードがある
  mode: "development",
  //watchモードを起動（ファイルを監視するモード）
  watch: true,
  // ソースマップを生成
  devtool: "cheap-module-eval-source-map",
  devServer: {
    // 自動でウィンドウを起動
    open: true,
    port: 9000,
    contentBase: path.resolve(__dirname, "public"),
  },
});
