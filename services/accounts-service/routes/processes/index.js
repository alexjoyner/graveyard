const utils = require('ro-server-utils');

module.exports = {
    getGroupsByClientID: (req, res) => {
        const { clientID } = req.params;
        return {
            text: 'SELECT id, name FROM point_group WHERE client_id = $1;',
            values: [clientID]
        };
    },
    getPointsByClientID: (req) => {
        const { clientID } = req.params;
        return {
            text: 'SELECT id, name, settings FROM point WHERE client_id = $1;',
            values: [clientID]
        };
    },
    getPointsByGroupID: (req) => {
        const { groupID } = req.params;
        return {
            text: `
            SELECT point.* FROM point_group_x_point 
                INNER JOIN point
                ON (point_group_x_point.point_id = point.id)
            WHERE 
              point_group_id = $1;`,
            values: [groupID]
        };
    },
    runBasicQuery: (getQuery) => {
        return async (req, res) => {
            try{
                const groups = await utils.runQuery('pg', getQuery(req));
                res.send(groups);
            }
            catch(e){  
                console.error(e);
                res.status(500).send('Something went wrong. Sorry');
            }
        }
    }
}