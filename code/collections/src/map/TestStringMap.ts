/**
 * Map<string, string> の扱いについて
 */
export module TestStringMap {

	/**
	 * 都道府県関連情報の操作を提供します。
	 */
	class Prefecture {

		private constructor() {

		}

		private static _prefectures: Map<string, string> | null;

		public static enumPrefectures(): Map<string, string> {

			const prefectures = new Map<string, string>();
			prefectures.set("01", "北海道");
			prefectures.set("02", "青森県");
			prefectures.set("03", "岩手県");
			prefectures.set("04", "宮城県");
			prefectures.set("05", "秋田県");
			prefectures.set("06", "山形県");
			prefectures.set("07", "福島県");
			prefectures.set("08", "茨城県");
			prefectures.set("09", "栃木県");
			prefectures.set("10", "群馬県");
			prefectures.set("11", "埼玉県");
			prefectures.set("12", "千葉県");
			prefectures.set("13", "東京都");
			prefectures.set("14", "神奈川県");
			prefectures.set("15", "新潟県");
			prefectures.set("16", "富山県");
			prefectures.set("17", "石川県");
			prefectures.set("18", "福井県");
			prefectures.set("19", "山梨県");
			prefectures.set("20", "長野県");
			prefectures.set("21", "岐阜県");
			prefectures.set("22", "静岡県");
			prefectures.set("23", "愛知県");
			prefectures.set("24", "三重県");
			prefectures.set("25", "滋賀県");
			prefectures.set("26", "京都府");
			prefectures.set("27", "大阪府");
			prefectures.set("28", "兵庫県");
			prefectures.set("29", "奈良県");
			prefectures.set("30", "和歌山県");
			prefectures.set("31", "鳥取県");
			prefectures.set("32", "島根県");
			prefectures.set("33", "岡山県");
			prefectures.set("34", "広島県");
			prefectures.set("35", "山口県");
			prefectures.set("36", "徳島県");
			prefectures.set("37", "香川県");
			prefectures.set("38", "愛媛県");
			prefectures.set("39", "高知県");
			prefectures.set("40", "福岡県");
			prefectures.set("41", "佐賀県");
			prefectures.set("42", "長崎県");
			prefectures.set("43", "熊本県");
			prefectures.set("44", "大分県");
			prefectures.set("45", "宮崎県");
			prefectures.set("46", "鹿児島県");
			prefectures.set("47", "沖縄県");
			return prefectures;
		}

		/**
		 * 都道府県名を ID でひきます。
		 *
		 * @param prefectureId 
		 */
		public static getPrefectureName(prefectureId: string): string {

			if (!Prefecture._prefectures)
				Prefecture._prefectures = Prefecture.enumPrefectures();
			return Prefecture._prefectures.get(prefectureId) ?? "";
		}
	}

	/**
	 * 都道府県名を調べます。
	 *
	 * @param id 
	 */
	function tryFindPrefectureById(id: string): void {

		const name = Prefecture.getPrefectureName(id);
		console.log("[TARCE] id: [" + id + "], name: [" + name + "]");
	}

	export function run() {

		// ID から名前をひくテスト
		{
			tryFindPrefectureById("00");
			tryFindPrefectureById("01");
			tryFindPrefectureById("02");
			tryFindPrefectureById("47");
			tryFindPrefectureById("48");
			tryFindPrefectureById("");
			tryFindPrefectureById("XX");
		}

		// 列挙するテスト(Map)
		{
			console.log("[TARCE] $$$ 列挙するテスト(Map) $$$");
			const prefs = Prefecture.enumPrefectures();
			prefs.forEach((value: string, key: string) => {
				console.log(`[TRACE] key: [${key}], value: [${value}]`);
			});
		}
	}
}
