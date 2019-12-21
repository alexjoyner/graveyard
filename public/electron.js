process.env.REACT_APP_SERVER_ADDRESS = 'http://192.168.2.10';
const electron = require('electron');

const { app } = electron;
const { BrowserWindow } = electron;

const path = require('path');
// const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(/* isDev ? 'http://localhost:3000' : */ `file://${path.join(__dirname, './index.html')}`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
