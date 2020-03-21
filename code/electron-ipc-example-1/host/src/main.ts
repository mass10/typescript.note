import { MyApplication } from "./application";

/**
 * エントリーポイント
 */
function main(): void {

	console.log("[TRACE] <main> ### begin ###");
	new MyApplication().run();
	console.log("[TRACE] <main> --- end ---");
}

main();
