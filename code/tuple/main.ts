namespace Main {

	/**
	 * API の応答を定義します。
	 */
	type APIResponse = [number, string];

	/**
	 * API のサンプル(1)
	 * @param request
	 */
	function Call1(request: string): APIResponse {
		return [200, request];
	}

	/**
	 * API のサンプル(2)
	 * @param request 
	 */
	function Call2(request: string): [number, string] {
		return [404, request];
	}

	/**
	 * アプリケーションのエントリーポイントです。
	 */
	export function main() {

		{
			const response = Call1("Hello");
			console.log("[TRACE] left: %s, right: %s", response[0], response[1]);
		}

		{
			const [status_code, status] = Call2("Hello");
			console.log("[TRACE] left: %s, right: %s", status_code, status);
		}
	}
}

Main.main();
