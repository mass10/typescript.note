import { MyCommon } from "./MyCommon";

export class Application {

	public constructor() {
		
	}

	public run(): void {
		console.log(`### START ###`);
		const message = MyCommon.MyUtil.hello();
		console.log(`${message}`);
		console.log(`--- END ---`);
	}
}
