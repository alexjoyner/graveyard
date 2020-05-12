'use strict';
import express from 'express';
import path from 'path';
let router = express.Router();

import {checkInNewClient} from './clients';

const configRoutes = (app) => {
	// this must come before app.get('*');
	// or it will be overwritten
	app.use('/', router);

	app.use(express.static(path.resolve(__dirname, '/docs')));
	app.use('/client', express.static(path.resolve(__dirname, '/docs')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '/docs/index.html'));
	});

	/* ERROR HANDLER */
	app.use((err, req, res, next) => {
		console.log('ERROR');
		res.status(err.status).send(err.message);
	});
};

router.post('/checkIn', checkInNewClient);

export {router, configRoutes};
