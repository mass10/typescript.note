/**
 * スタックフレーム情報を返します。
 *
 * @param error エラーオブジェクト
 */
function getStackFrameText(error: Error): string {
	const s = `${error?.stack}`;
	// 呼び出しフレームの3つめだけを取り出します。
	var matched = s.match(/[ \t]+at [a-zA-Z\.-_]+ \([a-zA-Z\.-_]+\)/g);
	if (!matched) {
		return "";
	}
	if (matched.length < 3) {
		return "";
	}
	return matched[2];
}

function getFileName(s: string): string {
	var matched = s.match(/[a-zA-Z_]+\.js:[0-9]+/g);
	if (!matched) {
		return "";
	}
	return matched[0];
}

/**
 * 呼び出しフレームの文字列表現を返します。
 *
 * @param s 
 */
function getStackFrameName(s: string): string {
	var matched = s.match(/[a-zA-Z_]+\.[^ ]+/g);
	if (!matched) {
		return "";
	}
	return matched[0];
}

/**
 * 例外表現から読み出しフレーム情報を読み取ります。
 *
 * @param text 
 */
function getStackFrame(): string {

	// エラーオブジェクトを作成
	const error = new Error();

	// 呼び出しフレームの3つめだけを取り出します。
	const text = getStackFrameText(error);
	if (!text) {
		return "unknown unknown";
	}

	// 終端のファイル名部分を取り出します。
	const filename = getFileName(text);
	if (!filename) {
		return "unknown unknown";
	}

	// 呼び出しフレームの名前を取り出します。
	const framename = getStackFrameName(text);
	if (!framename) {
		return "unknown unknown";
	}

	return `${filename} ${framename}`;
}

/**
 * タイムスタンプ文字列を返します。
 */
function getCurrentTimestamp(): string {
	// ローカル時刻
	const now = new Date();

	const year = `${now.getFullYear()}`;
	const month = `0${1 + now.getMonth()}`.slice(-2);
	const day = `0${now.getDate()}`.slice(-2);
	const hour = `0${now.getHours()}`.slice(-2);
	const minutes = `0${+ now.getMinutes()}`.slice(-2);
	const seconds = `0${now.getSeconds()}`.slice(-2);
	const milliseconds = `00${now.getMilliseconds()}`.slice(-3);

	return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}.${milliseconds}`;
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
		const timestamp = getCurrentTimestamp();
		const level = "TRACE";
		const parameters = 0 < args.length ? [`${timestamp} [${level}] <${frame}> ${args[0]}`] : [`${timestamp} [${level}] <${frame}>`];
		parameters.push(...args.slice(1));
		console.log(...parameters);
	}
}
