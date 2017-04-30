import express from 'express';
import http from 'http';
import {init} from './config/index';
let app = express();
let express_http = http.Server(app);

init(express, app);

let port = (process.env.PORT || 8080);

express_http.listen(port, function(err) {
    if (err) throw err;
    console.log('App running on port ' + port);
});

export {app};
