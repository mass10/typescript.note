module main {

	export function run(): void {

		const users = [
			"jimi.hendrix@docomo.ne.jp",
			"john.paul.jones@gmail.com",
			"ringo.starr@softbank.ne.jp"
		];

		const result = users
			.filter(email => 0 <= email.indexOf(".jp"))
			.map((email) => {return { "age": 0, "email": email }});

		console.log(result);
	}
}

main.run();
