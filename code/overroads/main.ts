module main {

	/**
	 * 不明なオブジェクトの文字列表現を得ます。
	 * 
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
	 * 不明なオブジェクトの文字列表現をテストします。
	 * 
	 * @param unknown オブジェクト
	 */
	function test1(unknown: any) {

		const result = toString(unknown);
		console.log("[TRACE] " + result + "");
	}

	/**
	 * エントリーポイントの定義です。
	 */
	export function run(): void {

		test1(999.999);
		test1("Hello! Tokyo");
		test1({ key1: "文字列1" });
		test1([900, 1, 29, -91]);
		test1(main);
		test1(test1);
		test1(() => console.log);
	}
}

main.run();
