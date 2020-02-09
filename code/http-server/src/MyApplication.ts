import express, { Request, Response } from "express";

export class MyApplication {

	public run(): void {

		const app = express();

		app.listen(8081, "127.0.0.1");

		app.set("view engine", "ejs");

		app.use("/static", express.static("public"));

		app.get("/", (req: Request, res: Response) => {
			console.log("[TRACE][GET] /");
			res.render("index.html.ejs", {});
		});

		app.get("/hello1", (req: Request, res: Response) => {
			console.log("[TRACE][GET] /hello1");
			res.render("hello1/index.html.ejs", {});
		});
	}
}
