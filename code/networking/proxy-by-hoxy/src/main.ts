var hoxy = require('hoxy');
var proxy = hoxy.createServer().listen(8080);

function main() {

	hoxy.createServer({
		reverse: 'http://localhost:3000',
		tls: {
			key: fs.readFileSync("path/to/my-server.key.pem"),
			cert: fs.readFileSync("path/to/my-server.crt.pem")
		}
	}).listen(443);
}

main();
