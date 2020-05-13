const utils = require('ro-server-utils');
const app = utils.getExpressApp()('basic');
const handleCheckLogs = require('./handleCheckLogs');

app.post('/check/logs', handleCheckLogs)

utils.runExpressApp()(app);

