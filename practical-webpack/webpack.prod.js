const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// 開発用の設定;
module.exports = merge(commonConfig, {
  mode: "production",
  watch: true,
});
