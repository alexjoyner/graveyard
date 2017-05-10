import path from 'path';
import express from 'express';
import {router} from './routes';
import {init, configRoutes} from 'ro-utils';
let app = express();
const BASE_DIR = path.resolve(__dirname + '/../');

// this must come before app.get('*');
// or it will be overwritten
app.use('/', router);
init(app);
configRoutes(express, app, BASE_DIR);
let port = (process.env.PORT || 8000);
let server;
if(!module.parent){
	server = app.listen(port, function () {
		console.log('App running on port ' + port);
	});
}

export {app, server};
