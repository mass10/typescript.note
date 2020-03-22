import electron, { BrowserWindowConstructorOptions } from "electron";
import path from "path";
import { runInContext } from "vm";

namespace APPLICATION {

	function onApplicationClose(): void {
		console.log("[TRACE] <onApplicationClose()> window-all-closed");
		electron.app.quit();
	}

	function createElectronWindow(): electron.BrowserWindow {
		const parameters: BrowserWindowConstructorOptions = {
			webPreferences: {
				nodeIntegration: false,
				contextIsolation: true,
				preload: path.resolve("dist/preload.js")
			}
		};
		const window = new electron.BrowserWindow(parameters);
		window.loadURL("http://localhost:8081");
		window.webContents.openDevTools();
		return window;
	}

	function onApplicationReady(): void {
		console.log("[TRACE] <onApplicationReady()>");
		createElectronWindow();
	}

	function onIPCMessage(event: electron.IpcMainEvent, args: any[]): void {
		console.log("[TRACE] <onIPCMessage()> RECV", JSON.stringify(args));
		// sendSync への応答
		event.returnValue = "# REPLY from Main Process";
	}

	function onApplicationActivate(): void {
		console.log("[TRACE] <onApplicationActivate()>");
	}

	function onApplicationWillQuit(): void {
		console.log("[TRACE] <onApplicationWillQuit()>");
	}

	export function run(): void {
		electron.app.allowRendererProcessReuse = true;
		electron.app.on("ready", onApplicationReady);
		electron.app.on("activate", onApplicationActivate);
		electron.app.on("window-all-closed", onApplicationClose);
		electron.app.on("will-quit", onApplicationWillQuit);
		electron.ipcMain.on("renderer-to-main", onIPCMessage);
	}
}

namespace MAIN {

	export function main(): void {
		APPLICATION.run();
	}
}

MAIN.main();
