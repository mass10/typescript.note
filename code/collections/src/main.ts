import { TestPureStringMap } from "./map/TestPureStringMap";
import { TestStringMap } from "./map/TestStringMap";
import { ArraySpreadingTest } from "./array/ArraySpreadingTest";
import { ArrrayTest } from "./array/ArrayTest";
import { VarargsTest } from "./array/VarargsTest";

/**
 * メイン
 */
module Main {

	/**
	 * エントリーポイント
	 */
	export function main() {

		// { [key: string]string } の扱い
		if (false) TestPureStringMap.run();

		// Map<string, string> の扱い
		if (false) TestStringMap.run();

		// 配列を dereference できるか
		if (false) ArraySpreadingTest.run();

		// 配列のまわしかた
		if (false) ArrrayTest.run();
		
		// 可変個引数に扱い
		if (true) VarargsTest.run();
	}
}

Main.main();
