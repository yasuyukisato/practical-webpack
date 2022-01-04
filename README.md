# webpackを用いて開発環境を構築する 
 
- package.json生成
npm init -y 
 
- 必要なモジュールをインストール
```
npm install --save jquery@5.5.1 velocity-animate@1.5.2 
npm install --save-dev webpack@4.43.0 webpack-cli@3.3.11
```
- ビルドとは 
```
実行ファイルを生成すること
```

- --save: dependencies に追記される。(※npm5より--saveがデフォルトで組み込まれている) 
```
- dependencies
 - 実行ファイルに必要なモジュールであることを示している
 - 出力されるファイルにバンドルされる
 - パッケージやプロジェクトの実行時に必要になるものを入れる 
```

- --save-dev: devDependencies に追記される。 
```
- devDependencies
 - 開発時に必要なモジュールであることを示している
 - 開発時に使うパッケージのみ入れる
 - 本番用のビルドをするときに含まれない
 - -Dで省略可 
 ```

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

- 最適化について
ファイルでコードが重複していないか 
ブラウザキャッシュを活用できているかどうか 
 - 更新頻度の低いファイルと更新頻度の高いファイルを一緒にしない（一緒にすると更新頻度の低いファイルまで、サーバーが新しくデータを取得しに行く可能性があるためキャッシュをうまく活用できていない）
splitChunksPluginを利用する 
 
- Babelを使ってトランスパイルを行う
```
npm install -D babel-loader@8.1.0 @babel/core@7.10.5 @babel/preset-env@7.10.4
```
ローダーを複数指定したい場合は、以下のようにuse内に利用したいローダーを記述
```
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'awesome-loader'],
    },
  ],
},
```

複数指定しているローダーにオプションを指定したい場合は、以下のように記述 
```
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        'awesome-loader',
      ],
    },
  ],
},
```
 
- トランスパイル 
```
npm install -D babel-loader@8.1.0 @babel/core@7.10.5 @babel/preset-env@7.10.4
```
.browserslistrcを作成する 
異なるツール間で共通利用できる設定ファイル（複数のツールで共通利用ができる）
bebelはこのファイルを利用できるので、対象ブラウザを記述すれば、そのブラウザで動作するコードに変換してくれる
