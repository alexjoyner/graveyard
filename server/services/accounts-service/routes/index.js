const { query, sendLocal } = require('ro-server-utils');
const { 
  getGroupsByClientID,
  getPointsByClientID,
  getPointsByGroupID,
  getAccount,
} = require('./processes');

module.exports = (app) => {
  app.get('/account/:clientID', query('pg', getAccount), sendLocal('results'));
  app.get('/groups/:clientID', query('pg', getGroupsByClientID), sendLocal('results'));
  app.get('/points/:clientID', query('pg', getPointsByClientID), sendLocal('results'));
  app.get('/points/group/:groupID', query('pg', getPointsByGroupID), sendLocal('results'));
};
