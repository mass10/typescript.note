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

namespace Main {

	function run(): Promise<any> {
		return new Promise((resolve: any, reject: any) => {
			const now = new Date();
			const secs = now.getSeconds() % 2;
			if (secs === 0) {
				resolve("成功");
			}
			else {
				reject("拒否");
			}
		});
	}

	export async function main(): Promise<any> {
		Logger.trace(`### START ###`);
		const result = await run()
		.then((result: any) => {
			Logger.trace(`THEN: ${result}`);
		})
		.catch((e: any) => {
			Logger.trace(`CAUGHT: ${e}`);
		});
		Logger.trace(`--- END ---`);
	}
}

Main.main();
