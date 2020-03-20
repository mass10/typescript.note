import electron from "electron";

namespace PRELOAD {

	function expose(): void {

		const functions = {
			send: (channel: string, unknown: any) => {
				try {
					const message = JSON.stringify(unknown);
					console.log("[TRACE] SEND!! channel: [" + channel + "], message: [" + message + "]");
					// electron.ipcRenderer.invoke("renderer-to-main", message);
					electron.ipcRenderer.send("renderer-to-main", message);
				}
				catch (e) {
					console.log("[ERROR] SEND ERROR" + e);
				}
			}
		};
		electron.contextBridge.exposeInMainWorld(
			"__MyApp1Object", functions
		);
	}

	export function main(): void {

		console.log("[TRACE] (preload) ### start ###");
		try {
			expose();
		}
		finally {
			console.log("[TRACE] (preload) --- end ---");
		}
	}
}

PRELOAD.main();
