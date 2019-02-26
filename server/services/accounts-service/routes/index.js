const { query, sendLocal, authenticate, jwt, getTextFromFile } = require('ro-server-utils');
const { 
  checkIfDemo,
  checkUserExists,
  getGroupsByClientID,
  getPointsByClientID,
  getPointsByGroupID,
} = require('./processes');

module.exports = (app) => {
  require('./demo')(app);
  // #### Routes For Real Users ####
  app.get('/account',
    jwt.verify(),
    sendLocal('tokenData'));
  app.get('/groups',
    jwt.verify(),
    query('pg', getGroupsByClientID),
    sendLocal('results'));
  app.get('/points',
    jwt.verify(),
    query('pg', getPointsByClientID),
    sendLocal('results'));
  app.get('/points/group/:groupID',
    jwt.verify(),
    query('pg', getPointsByGroupID),
    sendLocal('results'));
  app.post('/signIn',
    checkUserExists(),
    authenticate('isValid'),
    jwt.createToken({}, 'token'),
    sendLocal(['user', 'token']));
};
