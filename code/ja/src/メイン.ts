// import process from "process";

import { 計上バッチ } from "./計上バッチ";

namespace メイン {

	function runBatch(functionName: string): void {
		new 計上バッチ().run();
	}

	/**
	 * エントリーポイントの定義です。
	 */
	export function main() {
		runBatch("計上バッチ");
	}
}

メイン.main();
