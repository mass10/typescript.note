import fs from "fs";
import yaml from "js-yaml";

/**
 * コンフィギュレーションファイルを読み込みます。
 */
function configure(): any {

	const path = "conf\\settings.yml";
	const content = fs.readFileSync(path, "utf-8");
	const document = yaml.safeLoad(content);
	return document;
}

/**
 * エントリーポイント
 */
function main(): void {

	const conf = configure();
	console.debug("[TRACE]", conf);
	console.debug("[TRACE]", conf["settings"]["phone"]);
	console.debug("[TRACE]", conf["settings"]["address"]);
	console.debug("[TRACE]", conf["settings"]["attributes-1"]);
	console.debug("[TRACE]", conf["settings"]["sql"]);
	console.debug("[TRACE]", conf["undefined-key"]?.["undefined-key"]); // shows undefined
}

main();
