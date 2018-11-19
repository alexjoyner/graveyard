const utils = require('ro-server-utils');
const axios = require('axios');
const QueryBuilder = require('./utils/query_builder');
const app = utils.getExpressApp('basic');
const myQueryBuilder = new QueryBuilder();

app.post('/test', async (req, res, next) => {
  const { body } = req;
  try{
    await axios.post('http://socket-service/newlog', body.logs);
    next();
  }
  catch(e){  
    console.log("Error: ", e);
    res.status(500).send('Something went wrong. Sorry');
  }
}, utils.runQuery('pg', myQueryBuilder.getInsertString));

app.post('/', function (req, res) {
  console.log('New Log: ', req.body);
  res.send('Saving new log!');
});

utils.runExpressApp(app);

