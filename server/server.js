import express from 'express';
import http from 'http';
import {init} from './config/index';
let app = express();
let express_http = http.Server(app);

init(express, app);

let port = (process.env.PORT || 8080);

// !module.parent used for testing cases to make sure server isn't already started
// more info: http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
if(!module.parent){
    express_http.listen(port, function(err) {
        if (err) throw err;
        console.log('App running on port ' + port);
    });
}

export {app};
