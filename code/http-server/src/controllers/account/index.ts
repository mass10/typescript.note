import { Request, Response } from "express";

/**
 * /account/ へのリクエストを扱うモジュールです。
 */
export namespace account {

	/**
	 * GET /account/ のコントローラー定義です。
	 * @param req リクエストオブジェクト
	 * @param res レスポンスオブジェクト
	 */
	export const get = (req: Request, res: Response) => {
		res.render("account/index.html.ejs", {});
	};
}
