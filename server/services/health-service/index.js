const utils = require('ro-server-utils');
const fs = require('fs');
const { Client } = require('pg');
const app = utils.getExpressApp()('basic');

const conInfo = {
  user: fs.readFileSync(process.env.PG_USER_FILE, 'utf8'),
  password: fs.readFileSync(process.env.PG_PASS_FILE, 'utf8'),
  database: fs.readFileSync(process.env.PG_DB_FILE, 'utf8'),
  host: fs.readFileSync(process.env.PG_HOST_FILE, 'utf8'),
  port: process.env.PG_PORT || 5432,
}

const pgQuery = async (opts) => {
  const client = new Client(conInfo);
  try {
    await client.connect();
    const rawData = await client.query(opts)
    const result = rawData.rows
    await client.end();
    return result;
  }
  catch (e) {
    client.end();
    throw e;
  }
}
const queryStrategies = {
  'pg': pgQuery
}
const runQuery = (strategy, getOpts) => {
  return async (req, res) => {
    try {
      const groups = await queryStrategies[strategy](getOpts(req));
      res.send(groups);
    }
    catch (e) {
      res.status(500).send({
        success: false,
        error: e
      });
    }
  }
}
app.get('/check/db', runQuery('pg', () => ({
  text: "SELECT $1::text as message",
  values: ['Hello world!']
})));
app.get('/check/twilio', async (req, res) => {
  const textOpts = {
    message: 'Hello World',
    recipient: req.query.to
  };
  try{
    const result = await utils.notify()('text', textOpts)
    res.send({success: true, data: result, opts: textOpts});
  }catch(e){
    res.send({success: false, error: e, opts: textOpts});
  }
});


utils.runExpressApp()(app);
