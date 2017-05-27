import path from 'path';
import express from 'express';
import {router} from './routes';
import {init, configRoutes} from 'ro-utils';
let app = express();
const BASE_DIR = path.resolve(__dirname + '/../');

init(app);
// this must come before app.get('*');
// or it will be ovutilserwritten
app.use('/', router);
configRoutes(express, app, BASE_DIR);
let port = (process.env.PORT || 8000);
if(!module.parent){
	app.listen(port, function () {
		console.log('App running on port ' + port);
	});
}

function exitHandler(options, err) {
	if (options.cleanup) console.log('clean');
	if (err) console.log(err.stack);
	if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

export {app};
