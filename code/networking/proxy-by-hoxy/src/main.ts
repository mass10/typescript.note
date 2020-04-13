import fs from "fs";
import hoxy from "hoxy";

function main() {

	var proxy = hoxy.createServer({
		reverse: "http://localhost:3000",
		tls: {
			key: fs.readFileSync("XXXYYYZZZ.ga.key"),
			cert: fs.readFileSync("XXXYYYZZZ.ga.crt")
		}
	}).listen(443);
}

main();
