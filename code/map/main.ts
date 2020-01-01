module main {

	export function run(): void {

		const array = [1, 2, 3];
		const result = array.map((e) => e * 2);
		console.log(result);
	}
}

main.run();

