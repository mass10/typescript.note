import process from "process";
import dotenv from "dotenv";

namespace Main {

	export function main(): void {
		dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
		const env = process.env.ENV_DESCRIPTION;
		console.log(`[TRACE] env: ${env}`);
	}
}

Main.main();
