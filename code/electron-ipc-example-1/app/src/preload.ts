import electron from "electron";

namespace EXPOSED {

	/**
	 * Main プロセスに文字列を送信します。
	 * 
	 * @param channel チャネルの名称
	 * @param message 文字列
	 */
	export function send(channel: string, message: string): string {

		try {
			console.log("[TRACE] <exposed.send()> SEND. channel: [" + channel + "], message: [" + message + "]");
			// 非同期(応答なし)
			// electron.ipcRenderer.send(channel, message);
			// 同期(応答あり)
			const response = electron.ipcRenderer.sendSync(channel, message);
			// newer operation ??
			// electron.ipcRenderer.invoke(channel, message);
			return response;
		}
		catch (e) {
			console.log("[ERROR] <exposed.send()> SEND ERROR" + e);
			return "";
		}
	}

	/**
	 * IPC メッセージハンドラーを登録します。
	 * 
	 * @param channel チャネルの名称
	 * @param handler ハンドラー
	 */
	export function registerRecvHandler(channel: string, handler: (event: any, message: string) => {}): void {
		if (!handler) return;
		console.log("[TRACE] <registerRecvHandler()> ウェブアプリケーションからイベントハンドラ－が設定されました！", handler);
		electron.ipcRenderer.on(channel, handler);
	}
}

namespace PRELOAD {

	// function rendererEventhandler(event: electron.IpcRendererEvent, ...args: any[]): void {
	// 	console.log("[TRACE] <WWW.send()> RECV: ", JSON.stringify(args));
	// }

	/**
	 * ウェブアプリケーションにシンボルをエクスポートします。
	 */
	function expose(): void {

		console.log("[TRACE] <preload.expose()> called.");

		// 公開される操作
		const exportedOperations: Record<string, any> = {
			"send": EXPOSED.send,
			"registerRecvHandler": EXPOSED.registerRecvHandler
		};

		// オブジェクトをウェブサイト側に公開します。
		// __MyApp1Object は window オブジェクト直下の要素になります。
		electron.contextBridge.exposeInMainWorld("__MyApp1Object", exportedOperations);
	}

	/**
	 * ハンドラー初期化
	 */
	function registerIPCHandlers(): void {
		// ハンドラーの登録
		// electron.ipcRenderer.on("main-to-renderer", () => true);
	}

	/**
	 * preload のエントリーポイントです。
	 */
	export function main(): void {

		console.log("[TRACE] <preload.main()> called.");
		// ハンドラーの登録
		registerIPCHandlers();
		// 公開操作の登録
		expose();
	}
}

PRELOAD.main();
