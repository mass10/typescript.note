
namespace Main {

	function* values() {
		yield "1";
		yield "2";
		yield "3";
	}

	export function main() {

		const gen = values();
		while (true) {
			const current = gen.next();
			if (current.done) {
				break;
			}
			console.log("[%s]", current.value);
		}
	}
}

Main.main();
