class myutil {

	public static to_string(s: string): string {
		return s ?? ""
	}
}

class application_properties {
	public value: string;
	public constructor() {
	}
}

class configuration {

	public props: application_properties

	public constructor() {
		const prop = this.get_prop();
		// this.props.value = "正";
		// this.props.value = null;
	}

	public get_prop(): application_properties {
		if (this.props) {
			return this.props;
		}
		this.props = new application_properties();
		return this.props;
	}
}

class myapplication {
	public run() {
		console.log("[TRACE] ### start ###");
		const conf = new configuration();
		console.log("[TRACE] properties", conf);
		console.log("[TRACE] properties", (conf.props.value ?? ""));
		console.log("[TRACE] --- end ---");
	}
}

function main() {

	const app = new myapplication();
	app.run();
}

main();
