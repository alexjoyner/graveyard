const utils = require('ro-server-utils');
const axios = require('axios');
const QueryBuilder = require('./utils/query_builder');

const app = utils.getExpressApp('basic');
const myQueryBuilder = new QueryBuilder();

const PostLiveLog = async (req, res, next) => {
  const { body } = req;
  try {
    await axios.post('http://socket-service/newlog', body.logs);
    next();
  } catch (e) {
    console.log('Error: ', e);
    res.status(500).send('Something went wrong. Sorry');
  }
};

// depreciating /log/test to move to /log/new
//   - Both do the same thing, just a naming changes
//      v2 should remove /test
app.post('/test', PostLiveLog, utils.runQuery('pg', myQueryBuilder.getInsertString));
app.post('/new', PostLiveLog, utils.runQuery('pg', myQueryBuilder.getInsertString));

app.post('/', (req, res) => {
  console.log('New Log: ', req.body);
  res.send('Saving new log!');
});

utils.runExpressApp(app);
