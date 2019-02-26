const { getTextFromFile } = require('ro-server-utils');

module.exports = {
  checkUserExists: require('./checkUserExists'),
  getGroupsByClientID: (req, res) => {
    const { id } = res.locals.tokenData;
    return {
      text: getTextFromFile(__dirname, '../queries/getGroupsByClientID.pgsql'),
      values: [id],
    };
  },
  getPointsByClientID: (req, res) => {
    const { id } = res.locals.tokenData;
    return {
      text: getTextFromFile(__dirname, '../queries/getPointsByClientID.pgsql'),
      values: [id],
    };
  },
  getPointsByGroupID: (req, res) => {
    const { groupID } = req.params;
    return {
      text: getTextFromFile(__dirname, '../queries/getPointsByGroupID.pgsql'),
      values: [groupID],
    };
  },
  checkIfDemo: (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if(!bearerHeader){
        return next()
    }
    next('route');
  }
};
