const { menuFunctions } = require('./menu-functions')

window.addEventListener("DOMContentLoaded", () =>{
	window.getCurrentWindow = menuFunctions.getCurrentWindow
	window.openMenu = menuFunctions.openMenu
	window.minimizeWindow = menuFunctions.minimizeWindow;
	window.unmaximizeWindow = menuFunctions.unmaximizeWindow;
	window.maxUnmaxWindow = menuFunctions.maxUnmaxWindow;
	window.isWindowMaximized = menuFunctions.isWindowMaximized;
	window.closeWindow = menuFunctions.closeWindow;
})