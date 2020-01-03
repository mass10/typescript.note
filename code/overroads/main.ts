module test01 {

	/**
	 * 不明なオブジェクトの文字列表現を得るサンプルです。
	 * @param unknown 数値
	 */
	function toString(unknown: number): string;

	/**
	 * 不明なオブジェクトの文字列表現を得るサンプルです。
	 * @param unknown 文字列
	 */
	function toString(unknown: string): string;

	/**
	 * 不明なオブジェクトの文字列表現を得るサンプルです。
	 * @param unknown 不明なオブジェクト
	 */
	function toString(unknown: any): string {

		const type = typeof unknown;
		if (type === "string") {
			return "string(\"" + unknown + "\")";
		}
		if (type === "number") {
			return "number(" + unknown + ")";
		}
		if (type === "bigint") {
			return "bigint(" + unknown + ")";
		}
		if (type === "symbol") {
			return "symbol(" + unknown + ")";
		}
		if (type === "function") {
			return "function";
		}
		if (type === "undefined") {
			return "undefined";
		}
		if (unknown instanceof Array) {
			return "Array([" + unknown + "])";
		}
		return "" + unknown;
	}

	function testObject(unknown: any) {

		const result = toString(unknown);
		console.log("[TRACE] <testObject()> " + result + "");
	}

	export function run(): void {

		console.log("[TARCE] $$$ test01 $$$");
		testObject(999.999);
		testObject("Hello! Tokyo");
		testObject({ key1: "文字列1" });
		testObject([900, 1, 29, -91]);
		testObject(run);
		testObject(console);
		testObject(test01);
		testObject(() => console.log);
		console.log();
	}
}

module test02 {

	/**
	 * testObject 引数なし
	 */
	function testObject(): void;

	/**
	 * testObject 引数ひとつ
	 * @param param1 
	 */
	function testObject(param1: string): void;

	/**
	 * testObject 可変長引数
	 * @param param1 
	 */
	function testObject(...param1: any[]): void;

	/**
	 * testObject 唯一の実装
	 * @param param1
	 */
	function testObject(...param1: any[]): void {

		console.log("[TRACE] <testObject(...)> ", param1, param1.length);
	}

	export function run(): void {

		console.log("[TARCE] $$$ test02 $$$");
		testObject();
		testObject("AAA");
		testObject(["AAA", "BBB"]);
		testObject("AAA", "BBB");
		console.log();
	}
}

module main {

	/**
	 * エントリーポイントの定義です。
	 */
	export function run(): void {

		test01.run();
		test02.run();
	}
}

main.run();
