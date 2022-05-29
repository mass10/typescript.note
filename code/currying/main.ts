import { appendFileSync } from "fs";

module Lib {

	/**
	 * 指定された console に出力を行う logger を返します。
	 * @param console 
	 */
	export function getPrinter1(console: Console): (...args: any[]) => void {
		const printer = function (...args: any[]): void {
			console.log(args);
		};
		return printer;
	}

	/**
	 * 指定されたファイルに追記する appender を返します。
	 * @param path ファイルパス
	 */
	export function getPrinter2(path: string): (...args: any[]) => void {
		const printer = function (...args: any[]): void {
			for (const e of args) {
				appendFileSync(path, e, { encoding: "utf-8" });
			}
			appendFileSync(path, "\n", { encoding: "utf-8" });
		};
		return printer;
	}

	/**
	 * 最初に指定された指数によるべき乗を行う関数を返します。
	 * @param n 指数
	 */
	export function POW(n: number): (x: number) => number {
		return function (x: number): number {
			return x ** n;
		};
	}

	/**
	 * 引き算をする関数を返します。
	 * @param n 
	 * @returns 
	 */
	export function subtract(n: number): (right: number) => number {
		return function (right: number): number {
			return n - right;
		};
	}
}

/**
 * メインのアプリケーションモジュール
 */
module Main {

	/**
	 * エントリーポイント
	 */
	export function run() {

		// 標準出力を利用した文字列出力の動作確認。
		{
			const printer = Lib.getPrinter1(console);
			printer("コニチハ");
			printer("コニチハ");
			printer("コニチハ");
			printer("コニチハ");
		}

		// ファイルを利用した文字列出力の動作確認。
		{
			const printer = Lib.getPrinter2("log");
			printer("コニチハ");
			printer("コニチハ");
			printer("コニチハ");
			printer("コニチハ");
		}

		// 繰り返す演算を少し簡単にする例。
		{
			const pow2 = Lib.POW(2);

			// Shows [ 1, 81, 144 ].
			console.log([1, 9, 12].map(pow2));
		}

		// subtract を少し簡単にする例。
		{
			const subtract = Lib.subtract;
			console.log("[DEBUG] 引き算", subtract(10)(5));
			console.log("[DEBUG] 引き算", subtract(1)(1));
			console.log("[DEBUG] 引き算", subtract(100)(0));

		}
	}
}

Main.run();
