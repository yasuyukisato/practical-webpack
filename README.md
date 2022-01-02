# webpackを用いて開発環境を構築する 
 
- package.json生成
npm init -y 
 
- 必要なモジュールをインストール
```
npm install --save jquery@5.5.1 velocity-animate@1.5.2 
npm install --save-dev webpack@4.43.0 webpack-cli@3.3.11
```

- --save: dependencies に追記される。(※npm5より--saveがデフォルトで組み込まれている)
- --save-dev: devDependencies に追記される。
 
 
- dependencies
 - 開発時に必要なモジュールであることを示している
 - ファイルを出力するために使う
 - そのパッケージを動かすために必要な他のパッケージリスト 
 - パッケージやプロジェクトの実行時に必要になるものを入れる 
  
  
- devDependencies
 - 実行ファイルに必要なモジュールであることを示している
 - 出力されるファイルにバンドルされる
 - 開発時に使うパッケージのみ入れる
 - -Dで省略可 

開発環境と本番環境で設定ファイルを分ける場合はmergeプラグインが必要 
```
npm install -D webpack-merge@5.0.9
```
 
スクリプトに開発/本番環境に分けてコマンドを登録 
```
  "scripts": {
    "dev": "webpack --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
```
--configで利用する設定ファイルを指定できる 
productionでビルドすると圧縮ファイルが生成される 
 
今回使用しているwebpackの依存関係にあるパッケージの情報をみたい場合
```
npm info webpack@4.43.0
```
 
- ソースマップ
bundle後のファイルと元のファイルを関連付けるファイルであり、bundle前のコードを確認できるようになるため、デバックがしやすくなる 
基本的に開発環境で使用する 
```
module.exports = merge(commonConfig, {
  mode: "development",
  watch: true,
  // ソースマップを生成
  devtool: "cheap-module-eval-source-map",
});
```
 
- webpack-dev-serverをインストール
```
npm install -D webpack-dev-server@3.11.0
```


