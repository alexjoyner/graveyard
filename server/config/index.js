import morgan from 'morgan';
import bodyParser from 'body-parser';
import {setAccessHeaderMiddleware} from './accessHeaders';
import {getConfig} from './db';
function init(app) {
	app.use(bodyParser.json());
	app.use(morgan('dev'));
	/* You MUST set the access headers BEFORE the routes*/
	app.use(setAccessHeaderMiddleware);
	let port = (process.env.PORT || 8000);
	if(!module.parent){
		app.listen(port, function () {
			console.log('App running on port ' + port);
		});
	}
}

export {init};

