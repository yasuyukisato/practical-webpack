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

    // ブラウザキャッシュ対策として.[contenthash]を記述
    // 出力されるファイルごとに固有でハッシュが付与される
    // jsファイルを更新すると自動でハッシュが更新される
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: "js/[name].[contenthash].js",
  },
  optimization: {
    splitChunks: {
      // 分割したファイルを出力する設定を記述
      cacheGroups: {
        vendor: {
          chunks: "initial",
          // 分割の対象を指定
          // 今回対象のjqueryとvelocityはnode_modules以下にあるため以下のように記述
          test: /node_modules/,
          // 出力するファイル名
          name: "vendor",
        },
        // プロパティ名は任意
        vendorModules: {
          chunks: "initial",
          // src/js/modulesを指定
          // [\\/]は/の意味　windowsで動作しなくなるためそのように記述
          test: /src[\\/]js[\\/]modules/,
          name: "vendor-modules",
          // 分割の対象となるモジュールの最小サイズを記述/デフォルトだと30KBでgreet.jsは分割の対象にならないため0をかく
          minSize: 0,
          // モジュールがいくつの場所で利用されていれば分割の対象にするのかを指定
          // greet.jsはapp.js/another.jsの２つでimport、利用されているため分割の対象となるが、math.jsは１箇所でしか利用されていないため分割の対象にならないため、対象から外している
          minChunks: 2,
        },
      },
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
