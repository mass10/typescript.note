import fs from "fs";
var hoxy = require('hoxy');

function main() {

	// var proxy = hoxy.createServer().listen(8080);
	var proxy = hoxy.createServer({
		reverse: 'http://localhost:3000',
		tls: {
			key: fs.readFileSync("my-server.key.pem"),
			cert: fs.readFileSync("my-server.crt.pem")
		}
	}).listen(443);
}

main();
