import { Request, Response } from "express";
import { util } from "../helpers/util";

/**
 * / へのリクエストを扱うモジュールです。
 */
export namespace root {

	/**
	 * GET / のコントローラー定義です。
	 * @param req リクエストオブジェクト
	 * @param res レスポンスオブジェクト
	 */
	export const get = (req: Request, res: Response) => {
		res.render("index.html.ejs", {
			timestamp: util.getTimestamp()
		});
	};
}
