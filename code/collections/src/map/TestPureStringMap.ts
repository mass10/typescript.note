/**
 * { [key: string]: string } の扱いについて
 */
export module TestPureStringMap {

	/**
	 * 都道府県関連情報の操作を提供します。
	 */
	class Prefecture {

		private constructor() {

		}

		private static readonly _prefectures: { [key: string]: string } = {
			"01": "北海道",
			"02": "青森県",
			"03": "岩手県",
			"04": "宮城県",
			"05": "秋田県",
			"06": "山形県",
			"07": "福島県",
			"08": "茨城県",
			"09": "栃木県",
			"10": "群馬県",
			"11": "埼玉県",
			"12": "千葉県",
			"13": "東京都",
			"14": "神奈川県",
			"15": "新潟県",
			"16": "富山県",
			"17": "石川県",
			"18": "福井県",
			"19": "山梨県",
			"20": "長野県",
			"21": "岐阜県",
			"22": "静岡県",
			"23": "愛知県",
			"24": "三重県",
			"25": "滋賀県",
			"26": "京都府",
			"27": "大阪府",
			"28": "兵庫県",
			"29": "奈良県",
			"30": "和歌山県",
			"31": "鳥取県",
			"32": "島根県",
			"33": "岡山県",
			"34": "広島県",
			"35": "山口県",
			"36": "徳島県",
			"37": "香川県",
			"38": "愛媛県",
			"39": "高知県",
			"40": "福岡県",
			"41": "佐賀県",
			"42": "長崎県",
			"43": "熊本県",
			"44": "大分県",
			"45": "宮崎県",
			"46": "鹿児島県",
			"47": "沖縄県"
		}

		/**
		 * 都道府県一覧を返します。
		 */
		public static enumPrefectures(): { [key: string]: string } {

			return Prefecture._prefectures;
		}

		/**
		 * 都道府県名を ID でひきます。
		 *
		 * @param prefectureId 
		 */
		public static getPrefectureName(prefectureId: string): string {

			return Prefecture._prefectures[prefectureId] ?? "";
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

		// 列挙するテスト(map)
		{
			console.log("[TARCE] $$$ 列挙するテスト(mapped type) $$$");
			const prefectures = Prefecture.enumPrefectures();
			for (const key in prefectures) {
				const value = prefectures[key];
				console.log(`[TRACE] key: [${key}], value: [${value}]`);
			}

			console.log();
		}
	}
}
