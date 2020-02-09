import { AbstractTask, TaskStatus } from './AbstractTask';

type Status = {
	status: "",
	memo: ""
};

export class Task1 extends AbstractTask {

	/**
	 * 基本クラスのメンバ変数を隠すもの
	 */
	protected _status: any = {
		status: "",
		memo: ""
	};

	protected onInitialize(): void {
		console.log("[TRACE] <Task.onInitialize()> CALLED!");
		this._status = { status: "initializing", memo: "前処理実施中" };
		throw "不明な例外が発生";
	}

	protected onFinalize(): void {
		this._status = { status: "finalizing", memo: "後処理開始" };
		console.log("[TRACE] <Task.onFinalize()> サブクラスで実装されたメソッド");
	}

	protected describe(): string {
		const status: Status = this._status;
		return `status: [${status.status}], memo: [${status.memo}]`;
	}
}
