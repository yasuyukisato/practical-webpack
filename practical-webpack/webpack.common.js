const path = require("path");

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
};