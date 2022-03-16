// https://nodejs.org/api/child_process.html
import child_process from "child_process";


/**
 * タイムスタンプ文字列を返します。
 *
 * @returns タイムスタンプ文字列
 */
function getCurrentTimestamp(): string {
	// ローカル時刻
	const now = new Date()

	const year = `${now.getFullYear()}`
	const month = `0${1 + now.getMonth()}`.slice(-2)
	const day = `0${now.getDate()}`.slice(-2)
	const hour = `0${now.getHours()}`.slice(-2)
	const minutes = `0${+now.getMinutes()}`.slice(-2)
	const seconds = `0${now.getSeconds()}`.slice(-2)
	const milliseconds = `00${now.getMilliseconds()}`.slice(-3)

	return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}.${milliseconds}`
}

/**
 * ロギング関数
 *
 * @param level 
 * @param category 
 * @param args 
 */
async function writeLog(
	level: string,
	category: string,
	...args: any
): Promise<any> {
	if (!category) {
		category = "default";
	}
	const pid = process.pid;
	if (level === 'debug') {
		if (args.length < 2) {
			console.debug(`${getCurrentTimestamp()} (${pid}) [${level}][${category}] ${args}`);
		}
		else {
			const format = args[0];
			const params = args.slice(1);
			console.debug(`${getCurrentTimestamp()} (${pid}) [${level}][${category}] ${format}`, ...params);
		}
	}
	else if (level === 'info') {
		if (args.length < 2) {
			console.info(`${getCurrentTimestamp()} (${pid}) [${level}][${category}] ${args}`);
		}
		else {
			const format = args[0];
			const params = args.slice(1);
			console.info(`${getCurrentTimestamp()} (${pid}) [${level}][${category}] ${format}`, ...params);
		}
	}
	else if (level === 'warn') {
		if (args.length < 2) {
			console.warn(`${getCurrentTimestamp()} (${pid}) [${level}][${category}] ${args}`);
		}
		else {
			const format = args[0];
			const params = args.slice(1);
			console.warn(`${getCurrentTimestamp()} (${pid}) [${level}][${category}] ${format}`, ...params);
		}
	}
	else if (level === 'error') {
		if (args.length < 2) {
			console.error(`${getCurrentTimestamp()} (${pid}) [${level}][${category}] ${args}`);
		}
		else {
			const format = args[0];
			const params = args.slice(1);
			console.error(`${getCurrentTimestamp()} (${pid}) [${level}][${category}] ${format}`, ...params);
		}
	}
}

/**
 * 簡易ロガー
 */
class MyLogger {
	private constructor() { }

	public static async debug(category: string, ...args: any[]) {
		writeLog('debug', category, ...args)
	}

	public static async info(category: string, ...args: any[]) {
		writeLog('info', category, ...args)
	}

	public static async warn(category: string, ...args: any[]) {
		writeLog('warn', category, ...args)
	}

	public static async error(category: string, ...args: any[]) {
		writeLog('error', category, ...args)
	}
}

class ProcessHandler {

	private readonly _label: string;

	public constructor(label: string) {

		this._label = label;
	}

	public onFire(error: child_process.ExecException | null, stdout: string, stderr: string) {

		MyLogger.info("", "======================================================");
		MyLogger.info("", "EVENT: [" + this._label + "]");
		MyLogger.info("", "ERROR:", error);
		MyLogger.info("", "STDOUT:", stdout);
		MyLogger.info("", "STDERR:", stderr);
		MyLogger.info("", "");
	}
}

function process_handler(error: child_process.ExecException | null, stdout: string, stderr: string): void {

	MyLogger.info("", "ERROR:", error);
	MyLogger.info("", "STDOUT:", stdout);
	MyLogger.info("", "STDERR:", stderr);
}

function build_go(): boolean {

	const process = child_process.execSync("go build hello.go");
	MyLogger.info("", "BUILD: ", process.toString());
	return process != null;
}

function call(path: string): string {

	const response = child_process.execSync(path);
	return response.toString();
}

function call_hello(): boolean {

	const response = call("hello.exe");
	MyLogger.info("", response);
	if (response) return true;
	return false;
}

function call_msedge(): boolean {

	const path = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
	// const path = "modules\\sleep.exe";

	const proc = child_process.spawn(path);

	const errorHandler = new ProcessHandler("error")
	const exitHandler = new ProcessHandler("exit")
	const closeHandler = new ProcessHandler("close")

	proc.addListener("error", errorHandler.onFire.bind(errorHandler));
	proc.addListener("exit", exitHandler.onFire.bind(exitHandler));
	proc.addListener("close", closeHandler.onFire.bind(closeHandler));

	MyLogger.info("", `プロセスをオープンしました。(${proc.pid})`);

	if (proc) {
		return true;
	}
	return false;
}

function main(): void {

	MyLogger.info("", `### START ### (${process.pid})`);

	try {

		// Microsoft Edge を開きます。
		if (!call_msedge()) {
			return;
		}

		// 終了まで少し待機します。
		setTimeout(() => {
			MyLogger.info("", "Ok.");
		}, 1000 * 30)
	}
	finally {
		MyLogger.info("", "--- END ---");
	}
}

main();
