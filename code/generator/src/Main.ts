
namespace Main {

	/**
	 * ジェネレーターを返します。
	 */
	function* enumUsers(): IterableIterator<string> {
		const users = [
			"Jimi Hendrix",
			"Freddie Mercury",
			"Aretha Franklin",
			"Billie Holiday",
			"Louis Armstrong",
			"Sam & Dave",
			"Donny Hathaway",
		];
		for (const u of users) {
			yield u;
		}
	} 

	/**
	 * エントリーポイントです。
	 */
	export function main() {

		console.log("### START ###");

		const users = enumUsers();
		while (true) {
			const user = users.next();
			if (user.done) {
				break;
			}
			console.log(`[TRACE]`, user);
		}

		console.log("--- END ---");
	}
}

// ここから開始
Main.main();
