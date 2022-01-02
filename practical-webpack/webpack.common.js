const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // entryポイントを指定
  entry: "./src/js/app.js",
  // 出力先の設定（絶対パスを指定する必要がある）
  output: {
    // resoleveモジュールは絶対パスを返す/第一引数にルートを指定
    // __dirname には、現在実行中のソースコードが格納されているディレクトリパスが格納されている
    // ~/Hoge/foo.js/c/c.js 上で __dirname を取得すると ~/Hoge/foo.js/c になる
    path: path.resolve(__dirname, "public/js"),
    // ファイルの指定をする/publicのjsディレクトリにファイルが出力される
    filename: "bundle.js",
  },
  // プラグインを指定する設定
  plugins: [
    // CleanWebpackPluginはアウトプットのパスに指定した出力先をクリーンアップ(削除)するため、今回は *publicディレクトリ* がクリーンアップされる
    new CleanWebpackPlugin({
      // 削除パターンを指定できるオプション(index.htmlはwebpackで出力されているものではないため除外する)
      // 下記のように記述するとhtml以外の全てのディレクトリ、ファイルが対象となる
      cleanOnceBeforeBuildPatterns: ["**/*", "!**.html"],
    }),
  ],
};
