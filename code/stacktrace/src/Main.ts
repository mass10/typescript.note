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
		try {
			const error = new Error();
			console.log("(オブジェクト)", error);
		}
		catch (e) {

		}
		// const callingOperations = this.caller();
		// console.log("CALLER:", callingOperations);
		const timestamp = new Date().toISOString();
		const level = "trace";
		const parameters = 0 < args.length ? [`${timestamp} [${level}] ${args[0]}`] : [`${timestamp} [${level}]`];
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

Main.run();
