//
// interface を利用して delegate っぽいことをやる例
//

module Lib01 {

	/**
	 * ハンドラーのインターフェイスです。開発者はこのインターフェイスを実装したクラスを定義する必要があります。
	 */
	export interface Handler {
		name(name: string): boolean;
	}

	/**
	 * ライブラリから提供される関数の例
	 * @param array 配列を指定します。
	 * @param handler 開発者はそれぞれの要素を受け取るハンドラーを提供してください。
	 */
	export function searchElement01(array: string[], handler: Handler) {
		for (const e of array) {
			if (handler.name(e))
				break;
		}
	}
}

module case01 {

	/**
	 * delegate っぽいもの
	 */
	class NameHandler implements Lib01.Handler {
		public name(name: string): boolean {
			if (-1 == name.indexOf("a"))
				return false;
			console.log("Hit! [%s] contains \"a\"", name);
			return true;
		}
	}

	/**
	 * 実行
	 */
	export function run() {

		console.log("# CASE01");

		const array = [
			"Jimi Hendrix",
			"Aretha Franklin",
			"Joe Sample",
			"John Paul Jones",
			"Yngwie Malmsteen",
			"Zakk Wylde"
		];

		const handler = new NameHandler();

		Lib01.searchElement01(array, handler);

		console.log();
	}
}

//
// 高階関数(引数が関数)の例
//

module Lib02 {

	/**
	 * ライブラリから提供される関数の例
	 * @param array 配列を指定します。
	 * @param handler 開発者はそれぞれの要素を受け取るハンドラーを提供してください。
	 */
	export function searchElement02(array: string[], handler: (name: string) => boolean) {
		for (const e of array) {
			if (handler(e))
				break;
		}
	}
}

module case02 {

	/**
	 * 実行
	 */
	export function run() {

		console.log("# CASE02");

		const array = [
			"Jimi Hendrix",
			"Aretha Franklin",
			"Joe Sample",
			"John Paul Jones",
			"Yngwie Malmsteen",
			"Zakk Wylde"
		];

		const handler2 = function(e: string) {
			if (0 <= e.indexOf("e")) {
				console.log("Hit! [%s] contains \"e\"", e);
				return true;
			}
			return false;
		};

		Lib02.searchElement02(array, handler2);

		console.log();
	}
}

module Main {

	export function run() {

		// delegate っぽい実装の例
		case01.run();
		// 高階関数の例
		case02.run();
	}
}

Main.run();
