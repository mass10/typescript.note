/**
 * タイムスタンプ文字列を返します。
 */
function getCurrentTimestamp(): string {

	// ローカル時刻
	const now = new Date();

	const year = `${now.getFullYear()}`;
	const month = `0${1 + now.getMonth()}`.slice(-2);
	const day = `0${now.getDate()}`.slice(-2);
	const hour = `0${now.getHours()}`.slice(-2);
	const minutes = `0${+ now.getMinutes()}`.slice(-2);
	const seconds = `0${now.getSeconds()}`.slice(-2);
	const milliseconds = `00${now.getMilliseconds()}`.slice(-3);

	return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}.${milliseconds}`;
}

function main() {

	const now = new Date();

	console.log("[TRACE]", now.toDateString());
	console.log("[TRACE]", now.toISOString());
	console.log("[TRACE]", now);
	console.log("[TRACE]", getCurrentTimestamp());
}

main();
