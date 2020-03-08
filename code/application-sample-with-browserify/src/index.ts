import { util } from './logger';

class application {

	public run(): void {

		util.logger.trace("### start ###", { key1: "value-1" });
		util.logger.trace("文字列: [%s]", "abc");
		util.logger.trace("整数: [%d]", "abc");
		util.logger.trace("整数: [%d]", 89137);
		util.logger.trace("", new application(), 500, "IIII");
		util.logger.trace("--- end ---");
	}
}

function main() {

	const app = new application();
	app.run();
}

main();
