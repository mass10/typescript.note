module main {

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
		if (unknown instanceof Array) {
			return "Array([" + unknown + "])";
		}
		return "" + unknown;
	}

	function test1(unknown: any) {

		const result = toString(unknown);
		console.log("" + result + "");
	}

	export function run(): void {

		test1(999.999);
		test1("Hello! Tokyo");
		test1({ key1: "文字列1" });
		test1([900, 1, 29, -91]);
	}
}

main.run();
