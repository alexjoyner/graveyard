import {configRoutes} from '../routes';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import {setAccessHeaderMiddleware} from './accessHeaders';
import {getConfig} from './db';
function init(express, app) {
	app.use(bodyParser.json());
	app.use(morgan('dev'));
	/* You MUST set the access headers BEFORE the routes*/
	app.use(setAccessHeaderMiddleware);
	configRoutes(app);
}

export {init};
