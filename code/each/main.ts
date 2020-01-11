module main {

	export function main(): void {

		console.log("[TRACE] ### START ###");

		const list = ["aaa", "bbb", "ccc"];

		console.log("[TRACE] list:", list);

		list.forEach((e, i) => {
			console.log(i, e);
		});

		console.log("[TRACE] Ok.");
	}
}

main.main();
