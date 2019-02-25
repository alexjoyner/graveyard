const { query, sendLocal, authenticate, jwt } = require('ro-server-utils');
const { 
  checkUserExists,
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
  app.post('/signIn',
    checkUserExists(),
    authenticate('isValid'),
    jwt.createToken({}, 'token'),
    sendLocal(['user', 'token']));
};
