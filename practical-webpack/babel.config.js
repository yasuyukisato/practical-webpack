module.exports = {
  // 利用するプリセットを指定
  presets: [
    [
      "@babel/preset-env",
      {
        // 必要なポリフィルのみを取り組む
        useBuiltIns: "usage",
        // 指定しないとバージョン２が指定され、エラーや警告がでる
        corejs: 3,
        // 取り込まれたポリフィルの情報が出力される
        // debug: true,
      },
    ],
  ],
};
