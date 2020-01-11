module main {

	export function main(): void {

		const list = ["aaa", "bbb", "ccc"];
		console.log("%s", list);
		list.forEach((e, i) => {
			console.log("[%s] ... [%s]", i, e);
		});
	}
}

main.main();
