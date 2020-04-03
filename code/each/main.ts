module main {

	function test1(): void {

		console.log("[TRACE] <test1()> $$$ start $$$");

		const list = ["aaa", "bbb", "ccc"];

		list.forEach((e, i) => {
			console.log("[TRACE] <test1()> [%s] ... [%s]", i, e);
			return;
		});

		console.log("[TRACE] <test1()> --- end ---");
	}

	function test2(): void {

		console.log("[TRACE] <test2()> $$$ start $$$");

		const list = ["aaa", "bbb", "ccc"];

		for (const e of list) {
			console.log("[TRACE] <test2()> [%s]", e);
			return;
		}

		console.log("[TRACE] <test2()> --- end ---");
	}

	export function main(): void {

		console.log("[TRACE] <main()> ### start ###");

		test1();
		test2();

		console.log("[TRACE] <main()> --- end ---");
	}
}

main.main();
