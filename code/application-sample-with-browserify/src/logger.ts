export module util {

	export function _rpad(s: string, len: number): string {
		while (s.length < len) {
			s = "0" + s;
		}
		return s;
	}

	export function timestamp(): string {
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

	export class logger {

		public static trace(format: any, ...s: any[]): void {
			process.stdout.write(format);
		// public static trace(...s: any[]): void {
			if (s.length === 0) {
				console.log.call(null, timestamp() + " [TRACE] " + format);
			} else if (s.length === 1) {
				console.log.call(null, timestamp() + " [TRACE] " + format, s[0]);
			} else {
				// console.log.apply(s);
				console.timeLog(format, s);
				// console.log.call(null, timestamp() + " [TRACE] " + format, s);
			}
		}
	}
}
