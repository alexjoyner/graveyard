const { makeApp, runApp } = require('ro-server-utils');

const app = makeApp('basic');
const useRoutes = require('./routes');

useRoutes(app);

runApp(app);
