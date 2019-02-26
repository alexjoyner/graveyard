const { query, sendLocal, authenticate, jwt, getTextFromFile } = require('ro-server-utils');
const { 
  checkIfDemo,
  checkUserExists,
  getGroupsByClientID,
  getPointsByClientID,
  getPointsByGroupID,
  getAccount,
} = require('./processes');

module.exports = (app) => {
  // #### Routes For Demo ####
  app.get('/account/:clientID',
    checkIfDemo,
    query('pg', {
      text: getTextFromFile(__dirname, './queries/getAccount.pgsql'),
      values: [1],
    }),
    sendLocal('results'));
  app.get('/groups/:clientID',
    checkIfDemo,
    query('pg', {
      text: getTextFromFile(__dirname, './queries/getGroupsByClientID.pgsql'),
      values: [1],
    }),
    sendLocal('results'));
  app.get('/points/:clientID',
    checkIfDemo,
    query('pg', {
      text: getTextFromFile(__dirname, './queries/getPointsByClientID.pgsql'),
      values: [1],
    }),
    sendLocal('results'));
  app.get('/points/group/:groupID',
    checkIfDemo,
    (req, res, next) => {
      const demoGroups = ['1','2','3'];
      if(demoGroups.indexOf(req.params.groupID) === -1){
        next(new Error('Internal Error'));
      }
      next();
    },
    query('pg', getPointsByGroupID),
    sendLocal('results'));
};
