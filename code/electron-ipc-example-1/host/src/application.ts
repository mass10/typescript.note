import express from "express";
import { util } from "./util";

namespace handlers {

	export function get(req: express.Request, res: express.Response): void {
		const form = {
			timestamp: util.getTimestamp()
		};
		res.render("index.html.ejs", form);
	};
}

export class MyApplication {

	public constructor() {
	}

	public run(): void {
		const app = express();
		app.set("view engine", "ejs");
		app.use("/static", express.static("public"));
		app.get("/", handlers.get);
		app.listen(8081, "127.0.0.1");
	}
}
