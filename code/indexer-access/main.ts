/**
 * string のリスト
 */
interface IStringList {
	[index: number]: string;
}

/**
 * ユーザー情報
 */
interface User {
	id: string;
	name: string;
	address: string;
	phone: string;
	email: string;
}

/**
 * ユーザー情報管理リスト
 */
class UserList {

	private _core: User[] = [];

	public add(user: User) {
		this._core.push(user);
	}

	public get(index: number): User {
		return this._core[index];
	}

	public size(): number {
		return this._core.length;
	}

	// こういうのができない
	// [position: number]: string {
	//	return ...
	// }
}

export function main() {

	// 
	{
		let array: IStringList = ["Bob", "Fred"];

		console.log(array[0]);
		console.log(array[1]);
		console.log(array[2]);
	}

	// 独自のリストクラス
	{
		const users = new UserList();

		users.add({ email: "jimi.hendrix@gmail.com", id: "dummy", name: "Jimi Hendrix",
			address: "192-8501 東京都八王子市元本郷町3 24-1", phone: "090-1234-5678" });

		console.log(users);

		// console.log(users[0]); ✖ダメ
		// console.log(users[1]); ✖ダメ
		// console.log(users[2]); ✖ダメ
	}
}

main();
