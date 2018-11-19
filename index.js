const utils = require('ro-server-utils');
const app = utils.getExpressApp('basic');
const useRoutes = require('./routes');

useRoutes(app);

utils.runExpressApp(app);
