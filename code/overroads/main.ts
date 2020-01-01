function _rpad(s: any, len: number): string {

	s = "" + s;
	while (s.length < len) {
		s = "0" + s;
	}
	return s;
}

// タイムスタンプに関するさまざまな操作を提供します。
export class Timestamp {

	private constructor() {

	}

	public static timestamp0(): string {

		const now = new Date();
		const year = now.getFullYear();
		const month = 1 + now.getMonth();
		const day = now.getDate();
		const hour = now.getHours();
		const minutes = + now.getMinutes();
		const seconds = now.getSeconds();
		const milliseconds = now.getMilliseconds();

		return _rpad(year, 4) + "-" + _rpad(month, 2) + "-" + _rpad(day, 2) +
			" " + _rpad(hour, 2) + ":" + _rpad(minutes, 2) + ":" + _rpad(seconds, 2) +
			"." + _rpad(milliseconds, 3);
	}
}

// ロギングクラス
export class Logger {

	private constructor() {

	}

	private static roateLogs(): void {

	}

	public static trace(...params: any[]): void {

		let line = "";
		line += Timestamp.timestamp0();
		line += " [TRACE] ";
		params.forEach(e => {
			line += e;
		});
		console.log(line);
	}
}

function toString(unknown: number): string;
function toString(unknown: string): string;
function toString(unknown: any): string;
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

function main(): void {

	Logger.trace("### start ###");

	test1(999.999);
	test1("Hello! Tokyo");
	test1({ key1: "文字列1" });
	test1([900, 1, 29, -91]);

	Logger.trace("--- end ---");
}

main();
