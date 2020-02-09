import { Request, Response } from "express";

/**
 * /hello1/ へのリクエストを扱うモジュールです。
 */
export module hello1 {

	/**
	 * GET /hello1/ のコントローラー定義です。
	 * @param req リクエストオブジェクト
	 * @param res レスポンスオブジェクト
	 */
	export const get = (req: Request, res: Response) => {
		res.render("hello1/index.html.ejs", {});
	};
}
