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

function getInstrumentLabel(unknown: Instrument): string {

	const label = Instrument[unknown];
	return label ?? "";
}

function trace(unknown: Instrument): void {

	const label = getInstrumentLabel(unknown);
	console.log("[TRACE] value: [%d], label: [%s]", unknown, label);
}

function main() {

	trace(Instrument.guitar);
	trace(Instrument.cello);
	trace(Instrument["viola"]);
	trace(999);
}

main();
