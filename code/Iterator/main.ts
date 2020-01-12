interface Iterator<T> {
	next(): T | null;
}

module model {

	export type User = {
		id: string,
		name: string,
		email: string
	}

	export class UserList implements Iterator<User> {

		private _array = new Array<User>();

		private _position = 0;

		next(): User | null {
			if (this._position < this._array.length) {
				const response = this._array[this._position];
				this._position++;
				return response;
			}
			this._position = 0;
			return null;
		}

		add(user: User): void {
			this._array.push(user);
		}
	}
}

module Main {

	export function run() {

		const users = new model.UserList();
		users.add({ id: "522cea0c-9422-4d73-8aed-14c9c537c4da", name: "Freddy Mercury", email: "freddy.mercury@docomo.ne.jp" });
		users.add({ id: "ac3e7915-180b-4cf7-9057-dd80ef89a081", name: "Nina Simone", email: "nina.simone@i.softbank.jp" });
		users.add({ id: "7b60515c-e13a-4c1c-9f3d-2f9f1c20fc08", name: "Aretha Franklin", email: "aretha.franklin@i.softbank.jp" });
		users.add({ id: "24647058-da45-40b7-95b9-a2197c96f7f9", name: "Phil Lynott", email: "phil.lynott@gmail.com" });

		console.log("[TRACE] try 1");
		while (true) {
			const user = users.next();
			if (!user)
				break;
			console.log("[TRACE]", user);
		}

		console.log("[TRACE] try 2");
		while (true) {
			const user = users.next();
			if (!user)
				break;
			console.log("[TRACE]", user);
		}
	}
}

Main.run();
