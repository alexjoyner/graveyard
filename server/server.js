import express from 'express';
import {init} from './config/index';
let app = express();

init(express, app);

let port = (process.env.PORT || 8000);

var server = app.listen(port, function (err) {
	if (err) throw err;
	console.log('App running on port ' + port);
});

export {app, server};
