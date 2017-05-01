import express from 'express';
import {init} from './config/index';
let app = express();

init(express, app);

let port = (process.env.PORT || 8000);

// !module.parent used for testing cases to make sure server isn't already started
// more info: http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html

app.listen(port, function (err) {
	if (err) throw err;
	console.log('App running on port ' + port);
});

export {app};
