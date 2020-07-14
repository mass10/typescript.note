import fs from "fs";
import hoxy, { Cycle } from "hoxy";

function getCurrentTimestamp(): string {

	const now = new Date();
	return now.toISOString();
}

function getInterceptionHandler(something: any): hoxy.InterceptionHandler {

	return function (this: hoxy.Proxy, req: hoxy.Request, resp: hoxy.Response, cycle: hoxy.Cycle) {
		const timestamp = getCurrentTimestamp();
		console.log(`${timestamp} [TRACE] [${req.method}] ${req.url}`);
	};
}

function main(): void {

	var proxy = hoxy.createServer({
		reverse: "http://localhost:3000",
		tls: {
			key: fs.readFileSync("XXXYYYZZZ.ga.key"),
			cert: fs.readFileSync("XXXYYYZZZ.ga.crt")
		}
	}).listen(443);

	const handler = getInterceptionHandler(null);
	proxy.intercept({
		phase: "request"
	}, handler);
}

main();
