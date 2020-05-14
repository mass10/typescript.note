namespace Main {

	function isPostCode(s: String): boolean {
		const result = s.match(/^\d{3}-?\d{4}$/);
		if (result && 0 < result?.length) {
			return true;
		}
		return false;
	}

	function red(s: string): string {
		return `\x1b[31m${s}\x1b[39m`;
	}

	function green(s: string): string {
		return `\x1b[32m${s}\x1b[39m`;
	}

	function formatResult(b: boolean): string {
		return b ? green("true") : red("false");
	}

	function validatePostCode(s: String): void {
		const result = isPostCode(s);
		console.log(`[TRACE] ${JSON.stringify(s)} is postcode ? -> [${formatResult(result)}]`);
	}

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
