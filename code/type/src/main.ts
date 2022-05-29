// 要素の集合に対して名前を付けています。
type ApplicationStartupParameter = {
	/**
	 * なんらかの ID
	 */
	id: string,
	/**
	 * なんらかの説明文
	 */
	description: string
};

type Pixel = `${number}px`;

/**
 * アプリケーション本体クラス
 */
class Application {

	public run(s: ApplicationStartupParameter) {
		console.log("[TRACE] ", s);
	}
}

function setPixel(p: Pixel): void {
	console.log(p);
}

/**
 * アプリケーションのエントリーポイントです。
 */
function main() {

	const app = new Application();

	// パラメータとして許容されるオブジェクト(1)
	{
		const validStruct1 = {
			id: "395b7021-4e61-46e0-83fb-4effec50e252",
			description: "説明です。"
		}
		app.run(validStruct1);
	}

	// パラメータとして許容されるオブジェクト(2)
	{
		const validStruct2 = {
			id: "395b7021-4e61-46e0-83fb-4effec50e252",
			description: "このオブジェクトの説明",
			title: "タイトル",
			additional_info: {
				key1: "値1",
				key2: 8080
			}
		}
		app.run(validStruct2);
	}

	// パラメータとして許容されない型(1)
	{
		const invalidParameter = {
			batch_id: "a4c95a01-66bb-45f7-82f4-c0131af57d20",
			description: "このオブジェクトの説明文字列"
		};
		// app.run(invalidParameter);
	}

	// パラメータとして許容されない型(2)
	{
		const invalidParameter = {
			id: "b247e10a-65e4-4c2d-b10f-f41ff1eb3e09"
		};
		// app.run(invalidParameter);
	}

	{
		setPixel("100px");

		// Compilation error!
		// Argument of type '"100"' is not assignable to parameter of type '`${number}px`'.
		// setPixel("100");
	}
}

main();
