const utils = require('ro-server-utils');
const app = utils.getExpressApp()('basic');

utils.runExpressApp()(app);
