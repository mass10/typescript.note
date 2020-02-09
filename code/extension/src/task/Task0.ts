import { AbstractTask, TaskStatus } from './AbstractTask';

export class Task0 extends AbstractTask {

	/**
	 * override されたメソッド
	 */
	protected onInitialize(): void {
		this._status = "done";
		console.log("[TRACE] <Task.onInitialize()> CALLED!");
	}

	/**
	 * override されたメソッド
	 */
	protected onFinalize(): void {
		this._status = "done";
		console.log("[TRACE] <Task.onFinalize()> サブクラスで実装されたメソッド");
	}
}
