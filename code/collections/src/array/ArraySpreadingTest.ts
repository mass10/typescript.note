/**
 * 配列の spreading
 */
export module ArraySpreadingTest {

	export function _test(...args: any[]) {
		console.log(...args);
	}

	export function run() {
		_test(1, 2, "bbb");
	}
}
