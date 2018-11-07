let fs = require('fs');
const { Client } = require('pg');
const conInfo = {
  user: fs.readFileSync(process.env.PG_USER_FILE, 'utf8'),
  password: fs.readFileSync(process.env.PG_PASS_FILE, 'utf8'),
  database: fs.readFileSync(process.env.PG_DB_FILE, 'utf8'),
  host: fs.readFileSync(process.env.PG_HOST_FILE, 'utf8'),
}

const pgQuery = async (opts) => {
    const client = new Client(conInfo);
    try{
      await client.connect();
      const rawData = await client.query(opts)
      const result = rawData.rows
      await client.end();
      return result;
    }
    catch(e){  
      client.end();
      return new Error(e);
    }
}
const queryStrategies = {
    'pg': pgQuery
}
module.exports = async (strategy, opts) => {
    return await queryStrategies[strategy](opts);
}