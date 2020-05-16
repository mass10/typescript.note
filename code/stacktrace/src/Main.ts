/**
 * 例外表現から読み出しフレーム情報を読み取ります。
 *
 * @param text 
 */
function getStackFrame(): string {

	const error = new Error();
	const description = `${error?.stack}`;

	// 呼び出しフレームの3つめだけを取り出します。
	const matched1 = description.match(/[ \t]+(at [a-zA-Z\.-_]+ \([a-zA-Z\.-_]+\))/g);
	if (!matched1) {
		return "unknown unknown";
	}
	if (matched1.length < 3) {
		return "unknown unknown";
	}
	const text = matched1[2];

	// 終端のファイル名部分を取り出します。
	var matched = text.match(/[a-zA-Z_]+\.js:[0-9]+/g);
	if (!matched) return "unknown unknown";
	const filename = matched[0];

	// 呼び出しフレームの名前を取り出します。
	var matched = text.match(/[a-zA-Z_]+\.[^ ]+/g);
	if (!matched) return "unknown unknown";
	const framename = matched[0];

	return `${filename} ${framename}`;
}

class Logger {

	/**
	 * コンストラクタは非公開
	 */
	private constructor() {
	}

	/**
	 * ログ trace
	 *
	 * @param args 
	 */
	public static trace(...args: any[]): void {
		const frame = getStackFrame();
		const timestamp = new Date().toISOString();
		const level = "TRACE";
		const parameters = 0 < args.length ? [`${timestamp} [${level}] <${frame}> ${args[0]}`] : [`${timestamp} [${level}] <${frame}>`];
		parameters.push(...args.slice(1));
		console.log(...parameters);
	}
}

namespace Main {

	function style1(): void {

		var obj = {};
		Error.captureStackTrace(obj);
		// @ts-ignore
		console.log(obj?.stack);
	}

	export function run(): void {

		Logger.trace("### start ###");
		Logger.trace("%d", 999);
		Logger.trace("%s >> %s", "aaa", "AAA");
		// style1();
		Logger.trace("--- end ---");
	}
}

Logger.trace("static scope $$$ begin $$$");

Main.run();

Logger.trace("static scope --- end ---");
