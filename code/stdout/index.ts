
namespace Main {

	export function run() {

		console.log("[TRACE] ### BEGIN ###");
		console.log("[TRACE] テスト");
		console.log("[TRACE] %d", 567.890);

		process.stdout.write("[TRACE]");
		process.stdout.write(" test");
		process.stdout.write(" ああああああああああああ");
		process.stdout.write("\n");

		console.log("[TRACE] --- END ---");
	}
}

Main.run();
