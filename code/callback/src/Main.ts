class MyJob {

	private readonly _name: string;

	public constructor(name: string) {
		this._name = name;
	}

	private getName(): string {
		return this._name;
	}

	public run(): void {
		const name = this.getName();
		console.log(`[TRACE] (${name}) が呼ばれました`);
	}
}

export function main(): void {
	const app = new MyJob("あだち充");
	setTimeout(app.run.bind(app), 10); // SAFE.
	setTimeout(app.run, 10); // throws.
}

main();
