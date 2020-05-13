namespace Main {

	class User {
		public name: string = "";
		public email: string = "";
		public constructor(name: string, email: string) {
			this.name = name;
			this.email = email;
		}
	}

	function enumUsers(): User[] {
		const result: User[] = [];
		result.push(new User("Jimi Hendrix", "max.jimi@docomo.ne.jp"));
		result.push(new User("Terry Reid", "terry.reid@gmail.com"));
		return result;
	}

	export function main(): void {

		{
			const list = [100, 200, 300];
			// elements are mmutable
			list[0] = 0;
		}

		{
			const list = [100, 200, 300] as const;
			// elements are immutable
			// list[0] = 0;
		}

		{
			const list: readonly string[] = ["111", "222", "333"];
			// elements are immutable
			// list[1] = "";
		}

		{
			const users: readonly User[] = enumUsers();
			// elements are mutable
			users[0].name = "";
		}

		{
			const users: ReadonlyArray<User> = enumUsers();
			// elements are mutable
			users[0].name = "";
		}
	}
}

Main.main();
