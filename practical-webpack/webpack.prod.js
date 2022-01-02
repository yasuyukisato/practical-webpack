const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");

// 開発用の設定;
module.exports = merge(commonConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        // ライブラリー等のライセンスコメントの記述を防ぐ
        extractComments: false,
        terserOptions: {
          compress: {
            //console.logを排除して出力
            drop_console: true,
          },
        },
      }),
    ],
  },
});
