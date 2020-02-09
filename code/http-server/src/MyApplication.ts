import express, { Request, Response } from "express";
import { root } from "./controllers";
import { hello1 } from "./controllers/hello1";
import { dashboard } from "./controllers/dashboard";

/**
 * アプリケーションクラスです。
 */
export class MyApplication {

	/**
	 * アプリケーションを起動します。
	 */
	public run(): void {

		const app = express();

		app.set("view engine", "ejs");

		app.use("/static", express.static("public"));

		app.get("/", root.get);
		app.get("/hello1", hello1.get);
		app.get("/dashboard", dashboard.get);

		app.listen(8081, "127.0.0.1");
	}
}
