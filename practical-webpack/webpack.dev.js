const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// 開発用の設定;
module.exports = merge(commonConfig, {
  // モードを指定
  // develepmentとproductionのモードがある
  mode: "development",
  //watchモードを起動（ファイルを監視するモード）
  watch: true,
  // ソースマップを生成
  devtool: "cheap-module-eval-source-map",
});
