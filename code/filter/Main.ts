namespace Main {

	function enumUsers(): string[] {
		const users = [
			"00: Jimi Hendrix",
			"01: Aretha Franklin",
			"02: John Lennon",
			"03: Jimmi Page",
			"04: Ronnie Wood",
			"05: Keith Richards",
		];
		return users;
	}

	type UserElement = { name: string, email: string, birth: string };

	function reconstructUserElement(userName: string): UserElement {
		if (userName.indexOf("i") == -1) return null;
		return {
			name: userName,
			email: "",
			birth: "",
		};
	}

	function testConvertStructure1(): void {
		console.log("[TRACE] $$$ 文字列を別のオブジェクトに詰め替える例 $$$");
		const users = enumUsers();
		const elements = users.map(reconstructUserElement).filter(e => e !== null);
		for (const e of elements) {
			console.log("[TRACE]", e);
		}
	}

	function isValidName(name: string): boolean {
		return 0 <= name?.indexOf("J");
	}

	function filterUsers(users: string[]): string[] {
		return users.filter(isValidName);
	}

	function testFilteringUsersByName(): void {
		const users = enumUsers();
		for (const e of filterUsers(users)) {
			console.log(e);
		}
	}

	export function main(): void {

		// 要素を単純に条件でフィルタリングする例
		testFilteringUsersByName();
		// 要素を走査して別の構造に作り変える例
		testConvertStructure1();
	}
}

Main.main();
