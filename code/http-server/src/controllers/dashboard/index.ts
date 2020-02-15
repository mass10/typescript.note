import { Request, Response } from "express";

/**
 * /dashboard/ へのリクエストを扱う名前空間です。
 */
export namespace dashboard {

	/**
	 * GET /dashboard/ のコントローラー定義です。
	 * @param req リクエストオブジェクト
	 * @param res レスポンスオブジェクト
	 */
	export const get = (req: Request, res: Response) => {
		res.render("dashboard/index.html.ejs", {});
	};
}
