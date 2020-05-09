class MyJob {

	private readonly _name: string;

	public constructor(name: string) {
		this._name = name;
	}

	private getName(): string {
		return this._name;
	}

	public run(): void {
		const name = this ? this.getName() : "unknown";
		console.log(`[TRACE] (${name}) が呼ばれました`);
	}

	public echo(text: string): void {
		const name = this ? this.getName() : "unknown";
		console.log(`[TRACE] (${name}) >> ${text}`);
	}
}

function invoke(handler: () => void): void {
	handler();
}

function main(): void {
	const app = new MyJob("あだち充");
	setTimeout(app.run.bind(app), 10); // SAFE.
	setTimeout(app.run, 10); // throws.
}

main();
