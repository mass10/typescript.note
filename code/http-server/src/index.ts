import { MyApplication } from './application';

/**
 * エントリーポイントを定義する名前空間です。
 */
module Main {

	/**
	 * エントリーポイントの定義です。
	 */
	export function main() {
		// アプリケーションを起動します。
		new MyApplication().run();
	}
}

Main.main();
