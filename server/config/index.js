import {router} from '../routes';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import {setAccessHeaderMiddleware} from './accessHeaders';
import {APP_CONFIG_SETTINGS} from './db';
function init(express, app) {
	// this must come before app.get('*');
	// or it will be overwritten
	app.use('/', router);

	if (APP_CONFIG_SETTINGS.env === 'production') {
		app.use(express.static(path.resolve(__dirname, '../../docs')));
		app.use('/client', express.static(path.resolve(__dirname, '../../docs')));
		app.get('*', function (req, res) {
			res.sendFile(path.resolve(__dirname, '../../docs/index.html'));
		});
	}

	app.use(setAccessHeaderMiddleware);
	app.use(bodyParser.json());
	app.use(morgan('dev'));
}

export {init};
