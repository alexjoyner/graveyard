import path from 'path';
import express from 'express';
import {router} from './routes';
import {init, configRoutes} from 'ro-utils';
let app = express();
const BASE_DIR = path.resolve(__dirname + '/../');

init(app);
// this must come before app.get('*') or configRoutes();
// or it will be overwritten
app.use('/', router);
configRoutes(express, app, BASE_DIR);
let port = (process.env.PORT || 8000);

let server = app.listen(port, function () {
	console.log('App running on port ' + port);
});

function exitHandler(options) {
	console.log('Stopping Application');
	if (options.exit) process.exit(1);
}

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit: true}));
process.on('SIGTERM', exitHandler.bind(null, {exit: true}));

export {app, server};
