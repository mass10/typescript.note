/**
 * 配列のまわしかた
 */
export module ArrrayTest {

	export function run() {

		const array = ["aaa", "bbb", "ccc", "111"];

		for (const e of array) {
			console.log(`[TRACE] element: [${e}]`);
		}
	}
}
