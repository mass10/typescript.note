import electron from "electron";

namespace EXPOSED {

	function send(channel: string, unknown: any): string {

		try {
			const message = JSON.stringify(unknown);
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

	function registerRecvHandler(channel: string, handler: (event: any, message: string) => {}): void {
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
		const exportedOperations = {
			send: send,
			registerRecvHandler: registerRecvHandler
		};
		// 公開
		electron.contextBridge.exposeInMainWorld(
			"__MyApp1Object", exportedOperations
		);
	}

	/**
	 * preload のエントリーポイントです。
	 */
	export function main(): void {

		console.log("[TRACE] <preload.main()> called.");
		// ハンドラーの登録
		// electron.ipcRenderer.on("main-to-renderer", rendererEventhandler);
		// 公開操作の登録
		expose();
	}
}

PRELOAD.main();
