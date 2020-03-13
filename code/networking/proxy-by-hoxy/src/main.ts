import fs from "fs";
var hoxy = require('hoxy');

function main() {

	var proxy = hoxy.createServer({
		reverse: 'http://localhost:3000',
		tls: {
			key: fs.readFileSync("XXXYYYZZZ.key.pem"),
			cert: fs.readFileSync("XXXYYYZZZ.crt.pem")
		}
	}).listen(443);
}

main();
