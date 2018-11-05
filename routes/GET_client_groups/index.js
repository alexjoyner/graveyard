const {getClient} = require('../../db-client');

module.exports = (app) => {
  app.get('/groups/:clientID', async (req, res) => {
    const { clientID } = req.params;
    let Query = 'SELECT id, name FROM point_group WHERE client_id = $1;';
    const client = getClient();
    try{
      await client.connect();
      const rawData = await client.query({
        text: Query,
        values: [clientID]
      })
      const result = rawData.rows
      await client.end();
      res.send(result);
    }
    catch(e){  
      console.log("Error: ", e);
      client.end();
      res.status(500).send('Something went wrong. Sorry');
    }
  })
};
