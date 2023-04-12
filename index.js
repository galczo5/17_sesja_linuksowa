#!/usr/local/bin/node

const {app, BrowserWindow} = require('electron');


app.whenReady()
    .then(() => {
       const browserWindow = new BrowserWindow({
           width: 800,
           height: 600
       });

       browserWindow.loadFile('./joker/dist/index.html');
    });
