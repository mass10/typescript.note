class User {

	private readonly _name: string;

	public constructor(name: string) {
		this._name = name;
	}

	public getName(): string {
		return this._name;
	}
}

function main() {

	const app = new User("Paul Kossof");

	console.log("[TRACE] ", app.getName());

	// 公開メソッドを書き換えられてしまう。
	// どうしてこんなことになっているのか...
	// Issue を探したが特に何もみつけられなかった。
	app.getName = (): string => {
		return "";
	};

	console.log("[TRACE] ", app.getName());
}

main();
