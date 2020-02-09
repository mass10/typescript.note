import { MyApplication } from './MyApplication';

/**
 * エントリーポイントを定義するモジュールです。
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
