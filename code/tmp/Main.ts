namespace corejs_polyfill {
	var toString = {}.toString;
	var classofRaw = function (it: any) {
	  return toString.call(it).slice(8, -1);
	};
	export function main(): void {
		const arr = [] as string[];
		console.log("[TRACE] ", {}.toString);
		console.log("[TRACE] arr is", typeof arr);
		console.log("[TRACE] arr is", classofRaw(arr));
		console.log("[TRACE] arr is", arr.toString());
		console.log("[TRACE] arr is", {}.toString());
		console.log("[TRACE] arr is", [].toString());
		console.log("[TRACE] arr is", "ABC".toString());
		console.log("[TRACE] arr is", {}.toString.call(arr));
		console.log("[TRACE] arr is", {}.toString.call(""));
		console.log("[TRACE] arr is", {}.toString.call({}));
		console.log("[TRACE] arr is", {}.toString.call([]));
	}
}

namespace Main {
	export function main(): void {
		corejs_polyfill.main();
	}
}

Main.main();
