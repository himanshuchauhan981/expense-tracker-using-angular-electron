const { remote, ipcRenderer } = require("electron");

let menuFunctions = {
    getCurrentWindow: () => {
        return remote.getCurrentWindow();
    },
    openMenu: (x, y) => {
        ipcRenderer.send(`display-app-menu`, { x, y });
    },
    minimizeWindow(browserWindow = getCurrentWindow()) {
        if (browserWindow.minimizable) {
            // browserWindow.isMinimizable() for old electron versions
            browserWindow.minimize();
        }
    },

    maximizeWindow: (browserWindow = getCurrentWindow()) => {
        if (browserWindow.maximizable) {
            // browserWindow.isMaximizable() for old electron versions
            browserWindow.maximize();
        }
    },

    unmaximizeWindow: (browserWindow = getCurrentWindow()) => {
        browserWindow.unmaximize();
    },

    maxUnmaxWindow: (browserWindow = getCurrentWindow()) => {
        if (browserWindow.isMaximized()) {
            browserWindow.unmaximize();
        } else {
            browserWindow.maximize();
        }
    },

    closeWindow: (browserWindow = getCurrentWindow()) => {
        browserWindow.close();
    },

    isWindowMaximized: (browserWindow = getCurrentWindow()) => {
        return browserWindow.isMaximized();
    }
}

module.exports = { menuFunctions }