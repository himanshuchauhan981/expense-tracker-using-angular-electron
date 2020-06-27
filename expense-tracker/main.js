const { app, BrowserWindow,ipcMain, Menu } = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
      frame: false,
			nodeIntegration: true,
			preload: path.join(__dirname, "preload.js"),
      devTools : false
		},
		show: false,
		frame: false
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
	mainWindow.setMenuBarVisibility(false)

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

ipcMain.on('close-window', event => {
	mainWindow.close()
})

ipcMain.on('minimize-window', event => {
	mainWindow.minimize()
})

app.on('ready', createWindow)

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
	if (mainWindow === null) createWindow()
})
