import child_process from "child_process";

function process_handler(error: child_process.ExecException | null, stdout: string, stderr: string): void {
	console.log("[TRACE] ERROR:", error);
	console.log("[TRACE] STDOUT:", stdout);
	console.log("[TRACE] STDERR:", stderr);
}

function build_go(): boolean {

	const process = child_process.exec("go build hello.go", process_handler);
	console.log("[TRACE] ", process);
	return process != null;
}

function call_hello(): boolean {

	const process = child_process.exec("hello.exe", process_handler);
	console.log("[TRACE] ", process);
	return process != null;
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
