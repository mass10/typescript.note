module myfunctions {

	export function trim(x: unknown): string {
		if (x === null) return "";
		if (x === undefined) return ""
		return ("" + x).trim();
	}
}