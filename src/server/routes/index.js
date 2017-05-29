import path from 'path';
const configRoutes = (express, app, BASE_DIR) => {
	app.use(express.static(path.join(BASE_DIR, '/docs')));
	app.use('/client', express.static(path.join(BASE_DIR, 'docs')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(BASE_DIR, 'docs/index.html'));
	});

	/* ERROR HANDLER */
	app.use((err, req, res, next) => {
		console.log('ERROR: ', err);
		res.status(err.status).send(err.message);
	});
};

export {configRoutes};
