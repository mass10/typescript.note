import { Case01 } from "./map/Case01";
import { Case02 } from "./array/Case02";
import { Case03 } from "./array/Case03";
import { Case04 } from "./array/Case04";

/**
 * メイン
 */
module Main {

	/**
	 * エントリーポイント
	 */
	export function main() {

		//
		if (false) Case01.run();

		// 配列を dereference できるか
		if (false) Case02.run();

		// 配列のまわしかた
		if (false) Case03.run();
		
		Case04.run();
	}
}

Main.main();
