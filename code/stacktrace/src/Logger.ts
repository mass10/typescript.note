/**
 * 例外表現から読み出しフレーム情報を読み取ります。
 *
 * @param text 
 */
function getStackFrame(): string {

	const error = new Error();
	const description = `${error?.stack}`;

	// 呼び出しフレームの3つめだけを取り出します。
	var matched = description.match(/[ \t]+at [a-zA-Z\.-_]+ \([a-zA-Z\.-_]+\)/g);
	if (!matched) {
		return "unknown unknown";
	}
	if (matched.length < 3) {
		return "unknown unknown";
	}
	const text = matched[2];

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

export class Logger {

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
