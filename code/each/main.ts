module main {

	export function main(): void {

		const list = ["aaa", "bbb", "ccc"];

		list.forEach((e, i) => {
			console.log("[%s] ... [%s]", i, e);
		});
	}
}

main.main();
