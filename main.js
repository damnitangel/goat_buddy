
const { app, BrowserWindow } = require('electron');
const path = require('path');

/* ✅ Only use electron-reload in dev */
if (!app.isPackaged) {
  require('electron-reload')(__dirname);
}


function createWindow() {
  const win = new BrowserWindow({
    width: 320,
    height: 420,

    resizable: true,
    maximizable: true,
    fullscreenable: true,

    minWidth: 300,
    minHeight: 350,

    center: true,
    alwaysOnTop: true,

    /* ✅ CUSTOM ICON */
    icon: path.join(__dirname, 'goat.ico'),

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

/* ✅ Create window when app is ready */
app.whenReady().then(createWindow);

/* ✅ Quit app when all windows are closed (Windows/Linux behavior) */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/* ✅ Re-create window if app is re-opened (macOS behavior) */
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
