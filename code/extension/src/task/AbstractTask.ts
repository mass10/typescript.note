export type TaskStatus = "" | "running" | "done";

/**
 * 抽象基底クラス
 */
export abstract class AbstractTask {

	protected _status: TaskStatus = "";

	/**
	 * コンストラクター
	 */
	public constructor() {

	}

	/**
	 * 前処理。
	 * 派生クラスはこのメソッドを必ず提供する必要があります。
	 */
	protected abstract onInitialize(): void;

	/**
	 * 後処理。
	 * 派生クラスはこのメソッドを必ず提供する必要があります。
	 */
	protected abstract onFinalize(): void;

	protected setStatus(status: TaskStatus): void {
		this._status = status;
	}

	public run(): void {
		try {
			this.setStatus("running");
			this.onInitialize();
			this.onFinalize();
		}
		catch (e) {
			console.error("[ERROR] Exception occured (status: %s, reason: %s)", this.getStatus(), e);
			if (this instanceof AbstractTask) {
				console.log("AbstractTask.status: %s", this._status);
			}
			console.log("Task.status: %s", this.getStatus());
		}
	}

	public getStatus(): TaskStatus {
		return this._status;
	}
}
