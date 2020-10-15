//
// yarn add win32-api
//


import { U } from "win32-api";

namespace Main {

	export function main() {

		const u32 = U.load(['FindWindowExW', 'SetWindowTextW']);
		const lpszClass = new Buffer("", "utf-8");
		u32.FindWindowExW.async(0, 0, lpszClass, null, (err, hWnd) => {
			;
		});
	}
}

Main.main();
