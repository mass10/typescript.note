import * as fs from "fs";
// import * as os from "os";
import path from "path";


type GoogleProfile = {
	dirname: string;
	name: string;
}

/**
 * Google Chrome のプロファイルを検出します。
 * @returns プロファイルの配列
 */
export function detectGoogleProfiles(): GoogleProfile[] {
	const profiles: GoogleProfile[] = [];
	const appData = process.env['LOCALAPPDATA'] ?? '';
	const profileDir = path.join(appData, 'Google', 'Chrome', 'User Data');
	if (!fs.existsSync(profileDir)) {
		console.warn("[WARN] Google Chrome のプロファイルが見つかりませんでした。", profileDir);
		return profiles;
	}

	// すべてのサブディレクトリーを走査
	const dirs = fs.readdirSync(profileDir);

	for (const dir of dirs) {
		if (dir.startsWith('.')) continue;

		const fullpath = path.join(profileDir, dir);

		try {
			const file = path.join(fullpath, 'Preferences');
			const content = fs.readFileSync(file, 'utf-8');

			const data = JSON.parse(content);
			const name = data["profile"]["name"] || "";
			const entry = { dirname: dir, name };
			// console.log("[DEBUG] ファイル " + file, entry);
			profiles.push(entry)
		}
		catch {
			// NOP
		}
	}

	return profiles
}

function loadJsonFile(path: string): any {
	const content = fs.readFileSync(path, { encoding: "utf-8" });
	return JSON.parse(content);
}

/**
 * このコンピューター内のプロファイルを列挙します。
 */
function diagnoseLocalStateFile(): void {
	const appData = process.env['LOCALAPPDATA'] ?? '';
	const localStatePath = path.join(appData, 'Google', 'Chrome', 'User Data', "Local State");
	if (!fs.existsSync(localStatePath)) {
		console.warn("[WARN] Google Chrome のプロファイルが見つかりませんでした。", localStatePath);
		return;
	}
	const data = loadJsonFile(localStatePath);

	// 巨大なデータを削除
	// delete data["variations_safe_compressed_seed"];
	// delete data["variations_compressed_seed"];

	const inofoCache = data["profile"]["info_cache"];

	// このコンピューター内のプロファイルを列挙
	const directoryName = Object.keys(inofoCache);
	for (const e of directoryName) {
		const entry = inofoCache[e];
		console.log(`- "${e}"`, entry);
	}
}

/**
 * エントリーポイント
 *
 * @param args コマンドライン引数
 * @returns なし
 */
export function main(...args: string[]) {
	const diagnoseEachProfiles = args.includes("--diagnose-each-profiles");
	const diagnoseLocalState = args.includes("--diagnose-local-state");
	if (diagnoseLocalState) {
		// "Local State" ファイルの分析
		diagnoseLocalStateFile();
	}
	else if (diagnoseEachProfiles) {
		// すべてのプロファイルを列挙します。
		const profiles = detectGoogleProfiles();
		console.log(profiles);
	}
}

main(...process.argv.slice(2));
