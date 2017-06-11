import path from 'path';
import {webpack_dev_config} from 'ro-dev-utils';
let BASE_DIR = path.resolve(__dirname);
// GET Webpack configurations from 'ro-utils';

module.exports = webpack_dev_config(BASE_DIR);
