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
