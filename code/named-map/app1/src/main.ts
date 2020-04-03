import ipc from "node-ipc";
import fs from "fs";
import timers from "timers";

function onsession(): void {

	console.log("[TRACE] $$$ begin $$$");

	ipc.of.world1.on("connect", function () {
		// ipc.log("## connected to world1 ##", ipc.config.delay);
		ipc.log("[TRACE] ## connected to world1 ##");
		// ipc.log(ipc.of);
		ipc.of.world1.emit("pipeserver3-app.message", "ping");
	});
	ipc.of.world1.on("disconnect", function () {
		ipc.log("[TRACE] disconnected from world1");
	});

	// verbose だとうるさい
	ipc.of.world1.on("error", function (e: Error) {
		ipc.log("[ERROR]", e);
	});

	ipc.of.world1.on("pipeserver3-app.message", function (data: any) {
		ipc.log("[TRACE] got a message from world1 : ", data);
	});

	console.log("[TRACE]", ipc.of.world1.destroy);
	console.log("[TRACE] --- end ---");
}

function startConnect(): void {

	ipc.config.id = "hello";
	ipc.config.retry = 1000; // interval
	ipc.config.maxRetries = 0;
	ipc.config.appspace = "pipeserver3-app.";
	// ipc.config.silent = true;
	const pipeName = "world1";
	ipc.connectTo(pipeName, onsession);
}

function _sleep0(milliseconds: number): void {
	setTimeout(() => { }, milliseconds);
}

async function _sleep(ms: number) {
	await new Promise(resolve => setTimeout(() => resolve(), ms));
}

async function main() {
	while (true) {
		startConnect();
		if (fs.existsSync(".stop"))
			break;
		await _sleep(1000);
	}
}

main();
