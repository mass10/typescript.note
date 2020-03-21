/**
 * 汎用操作を提供します。
 */
export namespace util {

	/**
	 * 文字列の先頭を0埋めします。
	 * @param s 文字列
	 * @param len 要求する長さ
	 */
	export function zero_pad(s: string, len: number): string {

		while (s.length < len) {
			s = "0" + s;
		}
		return s;
	}

	/**
	 * タイムスタンプ文字列を返します。
	 */
	export function getTimestamp(): string {

		const now = new Date();
		const year = now.getFullYear();
		const month = 1 + now.getMonth();
		const day = now.getDate();
		const hour = now.getHours();
		const minutes = + now.getMinutes();
		const seconds = now.getSeconds();
		const milliseconds = now.getMilliseconds();

		return "" + zero_pad("" + year, 4) + "-" + zero_pad("" + month, 2) + "-" + zero_pad("" + day, 2) +
			" " + zero_pad("" + hour, 2) + ":" + zero_pad("" + minutes, 2) + ":" + zero_pad("" + seconds, 2) + "." + zero_pad("" + milliseconds, 3);
	}
}
