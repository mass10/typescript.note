/**
 * オブジェクトを比較します。
 *
 * @param left 左辺値
 * @param right 右辺値
 */
function diagnose(left: any, right: any): void {

	console.log('[DEBUG]', Object.is(left, right));
}

/**
 * エントリーポイント
 */
function main(): void {

	{
		const x1 = "Jimi Hendrix";
		const x2 = "" + "Jimi Hendrix";
		diagnose(x1, x2);
	}

	{
		const object1 = {};
		const object2 = {};
		diagnose(object1, object2);
	}
}

main();
