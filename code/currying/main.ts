// import { fs } from 'fs';

import { } from 'typescript';

module Main {

	function getPrinter(console: Console) {
		const printer = function(...args: any[]): void {
			console.log(args);
		};
		return printer;
	}

	function getPrinter2(path: string) {
		const printer = function(...args: any[]): void {
			// const file = new File(null, path);
			// fs.writeFileSync();			
			console.log(args);
		};
		return printer;
	}

	export function run() {

		{
			const printer = getPrinter(console);
			printer("コニチハ");
			printer("コニチハ");
			printer("コニチハ");
			printer("コニチハ");
		}
	}
}

Main.run();
