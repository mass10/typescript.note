import { Logger } from './Logger';

namespace Main {

	function style1(): void {

		var obj = {};
		Error.captureStackTrace(obj);
		// @ts-ignore
		console.log(obj?.stack);
	}

	export function run(): void {

		Logger.trace("### start ###");
		Logger.trace("%d", 999);
		Logger.trace("%s >> %s", "aaa", "AAA");
		// style1();
		Logger.trace("--- end ---");
	}
}

Logger.trace("static scope $$$ begin $$$");

Main.run();

Logger.trace("static scope --- end ---");
