

function _rpad(s: string, len: number): string {

	s = "" + s;
	while (s.length < len) {
		s = "0" + s;
	}
	return s;
}


function _get_date(): string {

	const now = new Date();
	const year = now.getFullYear();
	const month = 1 + now.getMonth();
	const day = now.getDate();
	const hour = now.getHours();
	const minutes = + now.getMinutes();
	const seconds = now.getSeconds();
	const milliseconds = now.getMilliseconds();

	return "" + _rpad("" + year, 4) + "-" + _rpad("" + month, 2) + "-" + _rpad("" + day, 2) +
		" " + _rpad("" + hour, 2) + ":" + _rpad("" + minutes, 2) + ":" + _rpad("" + seconds, 2) + "." + _rpad("" + milliseconds, 3);
}

function _main() {

	const now = new Date();

	console.log("[TRACE] " + now);
	console.log("[TRACE] " + _get_date());
}

_main();

