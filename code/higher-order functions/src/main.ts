function validateString(s: string, n: number): boolean {
	return s.length <= n;
}

function test(s: string, n: number, validation: ((s: string, n: number) => boolean) | null): void {
	const result = validation ? validation(s, n) : "未定義";
	console.log("[TRACE] 検査 [%s] は [%d] 文字以内 => [%s]", s, n, result);
}

function main() {

	const validation = validateString;
	test("あいうえお", 2, validation);
	test("あいうえお", 2, null);
	test("あいうえお", 6, validation);
	test("aaa", 3, validation);
}

main();
