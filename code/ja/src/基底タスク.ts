abstract class 基底タスク {

	public constructor() {

	}

	public run(): void {
		this.main();
	}

	protected abstract main(): void;
}
