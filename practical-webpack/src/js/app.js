// エントリーポイントの作成
// エントリーポイント = モジュールバンドラーでバンドルする際の、解析のスタート地点のファイル
// エントリーポイントを*起点*として、そのファイルでimportしているモジュールを順番に辿っていく
import $ from "jquery";
import velocity from "velocity-animate";
import { add } from "./modules/math";

console.log("app");

const result = add(2, 4);

$("body").append(result);
velocity($("h1"), "fadeIn", { duration: 2000, loop: true });