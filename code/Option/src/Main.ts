namespace Main {

	interface Option<T> {

		/**
		 * オブジェクトの中身が空かどうか調べます。
		 */
		isNone(): boolean;

		/**
		 * オブジェクトの中身が有効かどうか調べます。
		 */
		isSome(): boolean;

		/**
		 * オブジェクトの中身を取り出します。
		 */
		unwrap(): T;
	}

	class Some<T> {

		/**
		 * この Option 型の値
		 */
		private _value: T;

		/**
		 * コンストラクター
		 * @param value 
		 */
		public constructor(value: T) {
			// 初期値
			this._value = value;
		}

		/**
		 * オブジェクトの中身が空かどうか調べます。
		 */
		public isNone(): boolean {
			return this._value === undefined;
		}

		/**
		 * オブジェクトの中身が有効かどうか調べます。
		 */
		public isSome(): boolean {
			return this._value !== undefined;
		}

		/**
		 * オブジェクトの中身を取り出します。
		 */
		public unwrap(): T {
			return this._value;
		}	
	}

	class None implements Option<never> {

		/**
		 * オブジェクトの中身が空かどうか調べます。
		 */
		public isNone(): boolean {
			return true;
		}

		/**
		 * オブジェクトの中身が有効かどうか調べます。
		 */
		public isSome(): boolean {
			return false;
		}

		/**
		 * オブジェクトの中身を取り出します。この操作は常に失敗します。
		 */
		public unwrap(): never {
			throw null;
		}
	}

	/**
	 * 処理に失敗して None を返す操作の例です。
	 */
	function mustFailOperation1(): Option<string> {
		return new None();
	}

	/**
	 * 処理を完了し、Some を返す操作の例です。
	 */
	function mustSucceedOperation1(): Option<string> {
		return new Some("あたり！");
	}

	/**
	 * 関数を呼びだして結果を診断します。
	 * 
	 * @param fn 何らかの関数
	 */
	function invokeAndDiagnose(fn: () => Option<string>) {
		const result = fn();
		if (result.isNone()) {
			console.log("[ERROR] 結果は 空 でした。");
		}
		else {
			console.log(`[TRACE] 結果は ${result.unwrap()} でした。`);
		}
	}

	/**
	 * エントリーポイントです。
	 */
	export function main() {
		// None を扱う例
		invokeAndDiagnose(mustFailOperation1);
		// Some を扱う例
		invokeAndDiagnose(mustSucceedOperation1);
	}
}

Main.main();
