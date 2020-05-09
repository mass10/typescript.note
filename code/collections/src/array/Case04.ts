/**
 * 可変引数の取り扱いについて
 */
export module Case04 {

	function test1(...args: any[]): void {
		test2(...args);
	}

	function test2(...args: any[]): void {
		console.log("[TRACE]", JSON.stringify(args));
	}

	export function run() {

		test1("aaa", "bbb", "ccc", "111");
	}
}
