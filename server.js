import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import {router} from './server/routes';
import {renderIndex} from './utils';
import {
	setAccessHeaderMiddleware,
	APP_CONFIG_SETTINGS} from './server/config';
let app = express();
let express_http = http.Server(app);

app.use(setAccessHeaderMiddleware);
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', router);

if (APP_CONFIG_SETTINGS.env === 'production') {
	app.use(express.static(path.resolve(__dirname, './dist_client')));
	app.use('/client', express.static(path.resolve(__dirname, './dist_client/client')));
	app.get('*', renderIndex);
}

var port = (process.env.PORT || 8080);

express_http.listen(port, function(err) {
    if (err) throw err;
    console.log('App running on port ' + port);
});
