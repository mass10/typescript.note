// 要素の集合に対して名前を付けています。
type application_common_parameter = {
	id: string,
	description: string
};

// アプリケーションクラス
class application {

	// アプリケーションクラスのエントリーポイントです。ここから始まるストーリー。
	public run(s: application_common_parameter) {
		console.log("[TRACE] ", s);
	}
}

function _main() {

	const app = new application();

	// パラメータとして許容される型(1)
	{
		const valid_struct1 = {
			id: "395b7021-4e61-46e0-83fb-4effec50e252",
			description: "説明です。"
		}
		app.run(valid_struct1);
	}

	// パラメータとして許容される型(2)
	{
		const valid_struct2 = {
			id: "395b7021-4e61-46e0-83fb-4effec50e252",
			description: "このオブジェクトの説明",
			title: "タイトル",
			additional_info: {
				key1: "値1",
				key2: 8080
			}
		}
		app.run(valid_struct2);
	}

	// パラメータとして許容されない型(1)
	{
		const invalid_struct1 = {
			batch_id: "a4c95a01-66bb-45f7-82f4-c0131af57d20",
			description: "このオブジェクトの説明文字列"
		};
		// app.run(invalid_struct1);
	}

	// パラメータとして許容されない型(2)
	{
		const invalid_struct1 = {
			id: "b247e10a-65e4-4c2d-b10f-f41ff1eb3e09"
		};
		// app.run(invalid_struct1);
	}
}

_main();
