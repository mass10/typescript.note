namespace Main {

	/**
	 * 文字列を検査します。(郵便番号)
	 *
	 * @param s 文字列
	 */
	function isPostCode(s: String): boolean {
		const result = s.match(/^\d{3}-?\d{4}$/);
		if (result && 0 < result?.length) {
			return true;
		}
		return false;
	}

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

	/**
	 * 文字列を検査します。(郵便番号)
	 */
	function validatePostCode(s: String): void {
		const result = isPostCode(s);
		console.log(`[TRACE] ${JSON.stringify(s)} is postcode ? -> [${formatResult(result)}]`);
	}

	/**
	 * エントリーポイント
	 */
	export function main(): void {
		validatePostCode("");
		validatePostCode("9");
		validatePostCode("92");
		validatePostCode("123");
		validatePostCode("4567");
		validatePostCode("123-");
		validatePostCode("-4567");
		validatePostCode("123-4567");
		validatePostCode("123-4567\n000-0000");
		validatePostCode("123--4567");
		validatePostCode("090-1234-5678");
	}
}

Main.main();
