import { readFileSync } from "fs";

namespace Main {

	function loadJsonFile(path : string): any {
		const content = readFileSync(path, { encoding: "utf-8" });
		return JSON.parse(content)["settings"];
	}

	export function main() {

		console.log("### START ###");

		{
			const unknown = loadJsonFile(".settings.json");
			console.log(unknown);
			console.log(unknown["email"]);
			console.log(unknown["address"]);
		}

		console.log("Ok.");
	}
}

Main.main();
