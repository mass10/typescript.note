import { Request, Response } from "express";

/**
 * / へのリクエストを扱うモジュールです。
 */
export module root {

	/**
	 * GET / のコントローラー定義です。
	 * @param req リクエストオブジェクト
	 * @param res レスポンスオブジェクト
	 */
	export const get = (req: Request, res: Response) => {
		res.render("index.html.ejs", {});
	};
}
