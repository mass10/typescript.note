module main {

	/**
	 * 不明なオブジェクトの文字列表現を得ます。
	 * @param unknown オブジェクト
	 */
	function toString(unknown: number): string;
	function toString(unknown: string): string;
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

	/**
	 * test2 引数なし
	 */
	function test2(): void;

	/**
	 * test2 引数ひとつ
	 * @param param1 
	 */
	function test2(param1: string): void;

	/**
	 * test2 可変長引数
	 * @param param1 
	 */
	function test2(...param1: any[]): void;

	/**
	 * test2 唯一の実装
	 * @param param1
	 */
	function test2(...param1: any[]): void {
		console.log("[TRACE] <test2(...)> ", param1, param1.length);
	}

	/**
	 * 不明なオブジェクトの文字列表現をテストします。
	 * @param unknown オブジェクト
	 */
	function test1(unknown: any) {

		const result = toString(unknown);
		console.log("[TRACE] <test1()> " + result + "");
	}

	/**
	 * エントリーポイントの定義です。
	 */
	export function run(): void {

		if (true) {
			console.log("$$$ test1 $$$");
			test1(999.999);
			test1("Hello! Tokyo");
			test1({ key1: "文字列1" });
			test1([900, 1, 29, -91]);
			test1(main);
			test1(test1);
			test1(() => console.log);
		}

		if (true) {
			console.log("$$$ test2 $$$");
			test2();
			test2("AAA");
			test2(["AAA", "BBB"]);
			test2("AAA", "BBB");
		}
	}
}

main.run();
