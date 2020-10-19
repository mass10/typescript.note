namespace Main {

	function filterUsers(users: string[]): string[] {
		return users.filter(e => 0 <= e.indexOf("J"));
	}

	export function main(): void {
		const users = [
			"00: Jimi Hendrix",
			"01: Aretha Franklin",
			"02: John Lennon",
			"03: Jimmi Page",
			"04: Ronnie Wood",
			"05: Keith Richards",
		];
		for (const e of filterUsers(users)) {
			console.log(e);
		}
	}
}

Main.main();
