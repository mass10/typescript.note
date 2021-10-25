namespace Timestamp {

	function _rpad(s: string, len: number): string {

		s = "" + s;
		while (s.length < len) {
			s = "0" + s;
		}
		return s;
	}

	export function now(): string {

		const now = new Date();
		const year = now.getFullYear();
		const month = 1 + now.getMonth();
		const day = now.getDate();
		const hour = now.getHours();
		const minutes = + now.getMinutes();
		const seconds = now.getSeconds();
		const milliseconds = now.getMilliseconds();

		return "" + _rpad("" + year, 4) + "-" + _rpad("" + month, 2) + "-" + _rpad("" + day, 2) +
			" " + _rpad("" + hour, 2) + ":" + _rpad("" + minutes, 2) + ":" + _rpad("" + seconds, 2) + "." + _rpad("" + milliseconds, 3);
	}
}

export class Logger {

	private constructor() {}

	public static trace(...args: any[]): void {
		if (2 <= args.length) {
			const [format, fields] = [args[0], args.slice(1)];
			console.log(`${Timestamp.now()} [TRACE] ${format}`, ...fields);
		}
		else if (1 <= args.length) {
			const [format] = [args[0]];
			console.log(`${Timestamp.now()} [TRACE] ${format}`);
		}
	}

	public static error(...args: any[]): void {
		if (2 <= args.length) {
			const [format, fields] = [args[0], args.slice(1)];
			console.error(`${Timestamp.now()} [ERROR] ${format}`, ...fields);
		}
		else if (1 <= args.length) {
			const [format] = [args[0]];
			console.error(`${Timestamp.now()} [ERROR] ${format}`);
		}
	}

	public static warn(...args: any[]): void {
		if (2 <= args.length) {
			const [format, fields] = [args[0], args.slice(1)];
			console.warn(`${Timestamp.now()} [WARN] ${format}`, ...fields);
		}
		else if (1 <= args.length) {
			const [format] = [args[0]];
			console.warn(`${Timestamp.now()} [WARN] ${format}`);
		}
	}
}

class SafeTask {

	public run(): Promise<any> {

		const task = new Promise((resolve: (value: unknown) => void, reject: (reason? :any) => void) => {

			const now = new Date();

			const msec = now.getMilliseconds();
			if (msec < 200) {
				reject(undefined);
			}
			else if (msec < 400) {
				reject("拒否");
			}
			else {
				resolve("成功");
			}
		});

		return task;
	}
}

/**
 * ちょっと思いタスク
 */
class SlowTask {

	public run(): Promise<any> {

		return new Promise((resolve: (value: unknown) => void, reject: (reason? :any) => void) => {
			setTimeout(() => {
				resolve("成功");
			}, 5000);
		});
	}
}

class VoidTask {

	public async run(): Promise<void> {

		console.log(`[TRACE] <Voidtask.run()> called`)
		return new Promise<void>((resolve: () => void, reject: (reason?: any) => void) => {
			resolve();
		});
	}
}

class NumberTask {

	public async run(): Promise<number> {

		console.log(`[TRACE] <NumberTask.run()> called`)

		return new Promise<number>((resolve: (result: number) => void, reject: (reason?: any) => void) => {
			resolve(-1);
		});
	}
}

async function executeLater(task: () => void, timeInMillis: number): Promise<void> {
	let timer = 0;
	const operation = () => {
		if (timer) {
			clearTimeout(timer);
		}
		task();
	}
	timer = setTimeout(operation, timeInMillis);
}

async function getRequestRandomValueAsync(): Promise<number> {
	// reject しない Promise を返す。
	return new Promise<number>((resolve: (result: number) => void, reject: (reason?: any) => void) => {
		const time = Math.random() * 1000;
		executeLater(() => {
			resolve(Math.random());
		}, time);
	})
}

async function getRequestRandomValue(): Promise<number> {
	return Math.random();
}

class ContinuousSlowTask {

	public async runAsync(): Promise<number> {
		Logger.trace(`<ContinuousSlowTask.run()> called`)
		return new Promise<number>(async (resolve: (result: number) => void, reject: (reason?: any) => void) => {
			// 内側は無限ループにしてよい
			let count = 0;
			const timer = setInterval(async () => {
				count ? Logger.trace(`<ContinuousSlowTask.run()> 再試行`) : Logger.trace(`<ContinuousSlowTask.run()> 開始！`);
				// const result = await getRequestRandomValueAsync()
				const result = await getRequestRandomValue()
				Logger.trace(`[${result}]`)
				if (0.750 <= result) {
					clearInterval(timer);
					resolve(result);
				}
				count++;
			}, 3000);

			// while (true) {
			// 	// ここで待ちがあるので、無限ループは BUSY ではない。
			// 	const result = await getRequestRandomValueAsync()
			// 	Logger.trace(`[${result}]`)
			// 	if (result < 0.99) {
			// 		continue;
			// 	}
			// 	resolve(result);
			// 	break;
			// }
		});
	}
}

class ErrorTask {

	public run(): Promise<any> {
		const task = new Promise((resolve: any, reject: any) => {
			throw undefined;
		});
		return task;
	}
}

type ConfigurationSettings = {
    readonly timeout?: number;
}

function getConfigurationSettings(): ConfigurationSettings {
	const conf = { timeout: 0 } as ConfigurationSettings;
	return conf;
}

class UnstableTask {

	public runAsync(): Promise<string> {

		// 設定
		const conf = getConfigurationSettings();

		const successInterval = Math.random() * 1000 * 10;
		// const failureInterval = conf.timeout ?? 5 * 1000;
		const failureInterval = conf.timeout ? conf.timeout : 5 * 1000;

		Logger.trace(`このセッションのタイムアウト値... timeout: [${conf.timeout}], failureInterval: [${failureInterval}]`);

		const task = new Promise((resolve: (value: string) => void, reject: (reason?: any) => void) => {
			Logger.trace(`${successInterval} ms で処理中...`);
			const interval1 = setTimeout(() => {
				clearTimeout(interval2)
				Logger.trace('[UnstableTask] 正常終了！')
				resolve('OK');
			}, successInterval);
			const interval2 = setTimeout(() => {
				clearTimeout(interval1)
				Logger.error('[UnstableTask] 要求はタイムアウトしました。')
				reject('要求はタイムアウトしました。');
			}, failureInterval);
		});
		return task;
	}
}

async function test01(): Promise<void> {

	// ========== 非同期タスク呼び出し ==========
	const result = await new SafeTask().run().then((result: any) => {
		Logger.trace(`then: [${result}]`);
	}).catch((e: any) => {
		// reject(any) が呼ばれた、あるいは reject() が呼ばれた
		Logger.trace(`catch: CAUGHT EXCEPTION!`, e);
	});
}

async function test02() {

	const result = await new NumberTask().run().then((result: any) => {
		Logger.trace(`then: [${result}]`);
	}).catch((e: any) => {
		// reject(any) が呼ばれた、あるいは reject() が呼ばれた
		Logger.trace(`catch: CAUGHT EXCEPTION!`, e);
	});
}

function test03() {

	new SlowTask().run().then(() => {
		Logger.trace("Ok.");
	}).catch((e: any) => {
		console.error('[ERROR]', e);
	})
}

async function test04() {

	Logger.trace('非同期タスク呼び出し');
	const t = new ContinuousSlowTask().runAsync();
	Logger.trace('非同期タスクの終了を待っています...');
	await t.then((result: number) => {
		Logger.trace(`非同期タスク 終了`);
	})
	.catch((reason: any) => {
		Logger.trace(`catch: [${reason}]`);
	});
}

async function test05() {

	Logger.trace('=== ときどき遅延する非同期タスク ===');
	await new UnstableTask().runAsync()
	.then((result: string) => {
		Logger.trace(`非同期タスク: [${result}]`);
	})
	.catch((reason: any) => {
		Logger.trace(`catch: [${reason}]`);
	});
	Logger.trace('=== ときどき遅延する非同期タスク 終了 ===');
}

/**
 * アプリケーションのエントリーポイントです。
 */
function main(): void {

	Logger.trace(`### START ###`);

	// ========== 非同期タスク呼び出し ==========
	if (false) test01();
	if (false) test02();

	// ========== 遅い非同期タスクの呼び出し ==========
	if (false) test03();

	// ========== 遅い非同期タスクを呼び出し(再試行あり) ==========
	if (false) test04();

	if (true) test05();

	Logger.trace(`--- END ---`);
}

main();
