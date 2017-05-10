import path from 'path';
import express from 'express';
import {router} from './routes';
import {init, configRoutes} from 'ro-utils';
let app = express();
const BASE_DIR = path.resolve(__dirname + '/../');

// this must come before app.get('*');
// or it will be overwritten
app.use('/', router);
configRoutes(express, app, BASE_DIR);
init(app);

export {app};
