const { getTextFromFile } = require('ro-server-utils');

module.exports = {
  getAccount: (req) => {
    const { clientID } = req.params;
    return {
      text: getTextFromFile(__dirname, './queries/getAccount.pgsql'),
      values: [clientID],
    };
  },
  getGroupsByClientID: (req) => {
    const { clientID } = req.params;
    return {
      text: getTextFromFile(__dirname, './queries/getGroupsByClientID.pgsql'),
      values: [clientID],
    };
  },
  getPointsByClientID: (req) => {
    const { clientID } = req.params;
    return {
      text: getTextFromFile(__dirname, './queries/getPointsByClientID.pgsql'),
      values: [clientID],
    };
  },
  getPointsByGroupID: (req) => {
    const { groupID } = req.params;
    return {
      text: getTextFromFile(__dirname, './queries/getPointsByGroupID.pgsql'),
      values: [groupID],
    };
  },
};
