namespace Main {

	/**
	 * テキストを赤く修飾します。
	 * @param s 
	 */
	function red(s: string): string {
		return `\x1b[31m${s}\x1b[39m`;
	}

	/**
	 * テキストを緑に修飾します。
	 * @param s 
	 */
	function green(s: string): string {
		return `\x1b[32m${s}\x1b[39m`;
	}

	/**
	 * 評価結果の修飾
	 *
	 * @param b 
	 */
	function formatResult(b: boolean): string {
		return b ? green("true") : red("false");
	}

	function debug(unknown: any): void {

		const booleanValue = !!unknown;
		console.log(`[TRACE]`, unknown, `is ${formatResult(booleanValue)}.`);
	}

	export function main(): void {

		debug(null);
		debug(0);
		debug(undefined);
		debug("");

		debug([100, 200, 300]);
		debug([]);
		debug({});
		debug(-1);
		debug(1);
		debug(1.01);
		debug("A");
		debug("0");
	}
}

Main.main();
