import electron from "electron";
import path from "path";

function onApplicationClose(): void {
	console.log("[TRACE] <onApplicationClose()> window-all-closed");
	electron.app.quit();
}

function createElectronWindow(): Electron.BrowserWindow {
	const parameters = {
		webPreferences: {
			nodeIntegration: true,
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
	const window = createElectronWindow();
}

function onApplicationCertificationError(event: any, webContents: any, url: any, error: any, certificate: any, callback: any) {
	console.error("[TRACE] <onApplicationCertificationError()> Uncahght exception:", JSON.stringify(error));
	event.preventDefault();
	callback(true);
}

function onIPCMessage(event: electron.IpcMainEvent, args: any[]): void {
	console.log("[TRACE] <onIPCMessage()> RECV", JSON.stringify(args));
	event.sender.send("main-to-renderer", "pong");
}

function onApplicationActivate(): void {
	console.log("[TRACE] <onApplicationActivate()>");
}

function onApplicationWillQuit(): void {
	console.log("[TRACE] <onApplicationWillQuit()>");
}

function main(): void {
	electron.app.allowRendererProcessReuse = true;
	// electron.app.commandLine.appendSwitch("ignore-certificate-errors");
	electron.app.on('will-quit', onApplicationWillQuit);
	electron.app.on('ready', onApplicationReady);
	electron.app.on('activate', onApplicationActivate);
	electron.app.on('certificate-error', onApplicationCertificationError);
	electron.app.on("window-all-closed", onApplicationClose);
	electron.ipcMain.on("renderer-to-main", onIPCMessage);
}

main();