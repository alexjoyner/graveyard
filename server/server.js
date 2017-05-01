import express from 'express';
import {init} from './config/index';
let app = express();

init(express, app);

let port = (process.env.PORT || 8000);
let server;
if(!module.parent){
	server = app.listen(port, function () {
		console.log('App running on port ' + port);
	});
}

export {app, server};
