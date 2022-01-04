// エントリーポイントの作成
// エントリーポイント = モジュールバンドラーでバンドルする際の、解析のスタート地点のファイル
// エントリーポイントを*起点*として、そのファイルでimportしているモジュールを順番に辿っていく
import $ from "jquery";
import velocity from "velocity-animate";
import { add } from "./modules/math";
import { greet } from "./modules/greet.js";

console.log("app");

const result = add(2, 4);

console.log("app");

$("body")
  .append(result)
  .append(`<p>${greet("App")}</p>`);
velocity($("h1"), "fadeIn", { duration: 2000, loop: true });

const z = { z: 3 };
console.log({ x: 1, y: 2, ...z }); // => {x: 1, y: 2, z: 3}
// スプレッド構文 = オブジェクトをマージできる

// edgeの18はスプレッド構文に対応していないため変換されて出力される
