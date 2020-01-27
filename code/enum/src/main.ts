enum Instrument {
	guitar,
	bassguitar,
	violin,
	cello,
	doublebass,
	viola,
	bouzouki,
	mandolin
}

function trace(unknown: Instrument): void {

	console.log("[TRACE] %d %s", unknown, Instrument[unknown]);
}

function main() {

	trace(Instrument.guitar);
	trace(Instrument.cello);
	trace(Instrument["viola"]);
	trace(999);
}

main();
