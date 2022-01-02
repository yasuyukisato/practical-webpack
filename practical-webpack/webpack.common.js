const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entryポイントを複数指定
  entry: {
    app: "./src/js/app.js",
    another: "./src/js/another.js",
  },
  // 出力先の設定（絶対パスを指定する必要がある）
  output: {
    // resoleveモジュールは絶対パスを返す/第一引数にルートを指定
    // __dirname には、現在実行中のソースコードが格納されているディレクトリパスが格納されている
    // ~/Hoge/foo.js/c/c.js 上で __dirname を取得すると ~/Hoge/foo.js/c になる
    path: path.resolve(__dirname, "public/js"),
    // 複数のファイルを出力するため[name]をつけてplaceholderとして使用
    // entryポイントの名前であるappとanotherが[name]に入る
    filename: "[name].bundle.js",
    // エントリーポイント以外から出力するファイル名を指定できる
    chunkFilename: "js/[name].js",
  },
  optimization: {
    splitChunks: {
      // 分割の対象を記入 initialを指定すると静的にimportしているモジュールが対象
      // デフォルトでnode_modules以下のモジュールが対象のためjqueryとvelocityが指定される
      chunks: "initial",
      // 分割して出力するファイルの名前
      name: "vendor",
    },
  },
  // プラグインを指定する設定
  plugins: [
    // CleanWebpackPluginはアウトプットのパスに指定した出力先をクリーンアップ(削除)するため、今回は *publicディレクトリ* がクリーンアップされる
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // テンプレートを指定
      template: "./src/html/index.html",
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      // 何も指定しないとindex.htmlが出力されるため明記
      filename: "another.html",
      template: "./src/html/another.html",
      // どのファイルを読み込むのかを指定/指定しないとapp.jsとanother.jsを読み込んだhtmlファイルが生成される
      chunks: ["another"],
    }),
  ],
};
