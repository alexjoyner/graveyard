import path from 'path';
import {webpack_dev_config} from 'ro-dev-utils';
var ENV = process.env.NODE_ENV || "dev";
let BASE_DIR = path.resolve(__dirname);
// GET Webpack configurations from 'ro-utils';
switch (ENV) {
  case 'dev':
  case 'development':
  default:
    console.log('RUNNING DEV MODE WEBPACK');
    module.exports = webpack_dev_config(BASE_DIR);
}
