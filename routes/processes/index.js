const utils = require('../../utils');

module.exports = {
    getGroupsByClientID: async (req, res) => {
        const { clientID } = req.params;
        try{
          const groups = await utils.runQuery('pg', {
            text: 'SELECT id, name FROM point_group WHERE client_id = $1;',
            values: [clientID]
          });
          res.send(groups);
        }
        catch(e){  
          console.error(e);
          res.status(500).send('Something went wrong. Sorry');
        }
    }
}