/**
 * 連想配列の形式に対して名前を付けることができます。
 */
namespace Data {

	interface IData {
		id: string
		email: string
		name: string
	}

	interface IMailAccount {
		email: string
		name: string
	}

	/**
	 * 連想配列をダンプします。
	 * @param data 
	 */
	function dump1(data: IData): void {
		console.log("[TRACE]", JSON.stringify(data));
	}

	/**
	 * 連想配列をダンプします。
	 * @param data 
	 */
	function dump2(data: IMailAccount): void {
		console.log("[TRACE]", JSON.stringify(data));
	}

	export function run(): void {
		const data = {
			id: "8781239124-21398023-231-123987142",
			email: "randy.rhodes@docomo.ne.jp",
			name: "Randy Rhoads"
		}
		dump1(data);
		dump2(data);
	}
}

namespace Main {

	/**
	 * エントリーポイントです。
	 */
	export function main() {

		Data.run();
	}
}

Main.main();
