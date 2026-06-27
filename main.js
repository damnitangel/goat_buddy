require('electron-reload')(__dirname);

const { app, BrowserWindow } = require('electron');

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
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
});


  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
