// https://nodejs.org/api/child_process.html
import child_process from "child_process";

function process_handler(error: child_process.ExecException | null, stdout: string, stderr: string): void {

	console.log("[TRACE] ERROR:", error);
	console.log("[TRACE] STDOUT:", stdout);
	console.log("[TRACE] STDERR:", stderr);
}

function build_go(): boolean {

	const process = child_process.execSync("go build hello.go");
	console.log("[TRACE] BUILD: ", process.toString());
	return process != null;
}

function call(path: string): string {

	const response = child_process.execSync(path);
	return response.toString();
}

function call_hello(): boolean {

	const response = call("hello.exe");
	console.log("[TRACE] ", response);
	if (response) return true;
	return false;
}

function main(): void {

	console.log("[TRACE] ### START ###");
	try {
		// hello.go をビルドします。
		if (!build_go())
			return;
		// hello.exe を呼び出します。
		if (!call_hello())
			return;
	}
	finally {
		console.log("[TRACE] --- END ---");
	}
}

main();
