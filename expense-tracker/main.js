const { app, BrowserWindow,ipcMain } = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
        frame: false,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, "preload.js"),
            devTools : false
		},
		show: false
	})

	mainWindow.maximize()
	mainWindow.show()

	mainWindow.loadURL(
		url.format({
			pathname: path.join(__dirname, `/dist/index.html`),
			protocol: "file:",
			slashes: true
		})
	)
	
	mainWindow.webContents.openDevTools()

	mainWindow.on('closed', function () {
		mainWindow = null
    })
}

ipcMain.on(`display-app-menu`, function(e, args) {
	if (isWindows && mainWindow) {
	  menu.popup({
		window: mainWindow,
		x: args.x,
		y: args.y
	  });
	}
  });

app.on('ready', createWindow)

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
	if (mainWindow === null) createWindow()
})
