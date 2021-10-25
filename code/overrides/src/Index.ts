
/**
 * 抽象基底タスク
 */
abstract class AbstractTask {

	public AbstractTask() {

	}

	public abstract getTaskIds(): string;
}

/**
 * 何もせず終了するタスク
 */
class NoopTask extends AbstractTask {

	public override getTaskId(): string {
		return "NO-001";
	}
}

/**
 * 郵便番号ローダー
 */
class PostalLoaderTask extends AbstractTask {

	/**
	 * @override
	 */
	public override getTaskId(): string {
		return "PL-001";
	}
}

class Application {

	public Application() {

	}

	private createTask(request: string): AbstractTask {
		if (request === "postal_loader") {
			return new PostalLoaderTask();
		}
		return new NoopTask();
	}

	public run(request: string): void {
		const task = this.createTask(request);
		console.log(`[TRACE] Running [${task.getTaskId()}] を実行中です...`);
		console.log(`[TRACE] ### START [${task.getTaskId()}] ###`);
		console.log(`[TRACE] --- END [${task.getTaskId()}] ---`);
	}
}

function main(): void {

	try {
		let request = "postal_loader";
		new Application().run(request);
	}
	catch (e: any) {
		console.log(e);
	}
}

main();
