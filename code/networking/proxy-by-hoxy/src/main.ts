import fs from "fs";
import hoxy from "hoxy";

/**
 * 現在のタイムスタンプを返します。
 * @return タイムスタンプ
 */
function getCurrentTimestamp(): string {

	const now = new Date();
	return now.toISOString();
}

/**
 * リクエストをインターセプトするハンドラーです。
 * @param req 
 * @param resp 
 * @param cycle 
 */
function onRecvRequest(req: hoxy.Request, resp: hoxy.Response, cycle: hoxy.Cycle) {
	const timestamp = getCurrentTimestamp();
	console.log(`${timestamp} [TRACE] [${req.method}] ${req.url}`);
}

/**
 * エントリーポイントです。
 */
function main(): void {

	var proxy = hoxy.createServer({
		reverse: "http://localhost:3000",
		tls: {
			key: fs.readFileSync("XXXYYYZZZ.ga.key"),
			cert: fs.readFileSync("XXXYYYZZZ.ga.crt")
		}
	}).listen(443);

	proxy.intercept({
		phase: "request"
	}, onRecvRequest);
}

// ここからスタート
main();
