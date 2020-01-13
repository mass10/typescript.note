import { writeFileSync, appendFileSync } from "fs";

module Lib {

	export function getPrinter(console: Console) {

		const printer = function (...args: any[]): void {
			console.log(args);
		};
		return printer;
	}

	export function getPrinter2(path: string) {

		const printer = function (...args: any[]): void {
			for (const e of args) {
				appendFileSync(path, e, { encoding: 'utf-8' });
			}
			appendFileSync(path, "\n", { encoding: 'utf-8' });
		};
		return printer;
	}
}

module Main {

	export function run() {

		{
			const printer = Lib.getPrinter(console);
			printer("コニチハ");
			printer("コニチハ");
			printer("コニチハ");
			printer("コニチハ");
		}

		{
			const printer = Lib.getPrinter2("log");
			printer("コニチハ");
			printer("コニチハ");
			printer("コニチハ");
			printer("コニチハ");
		}
	}
}

Main.run();
