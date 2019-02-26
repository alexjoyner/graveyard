const { query, getTextFromFile, ERRORS } = require('ro-server-utils');

const getUserByClientName = (req) => {
  const { username } = req.body;
  return {
    text: getTextFromFile(__dirname, '../queries/getAccountByClientName.pgsql'),
    values: [username],
  };
};

const ensureUserWasRetreived = (req, { locals }, next) => {
  if(locals.results.length === 0){
    next(ERRORS.USER_NOT_FOUND);
  }
  const {id, username, password} = locals.results[0];
  locals.user = {id, username}
  locals.results = {id, username};
  locals.hashedPass = password
  next();
}

module.exports = (opts) => {
  return [
    query('pg', getUserByClientName),
    ensureUserWasRetreived,
  ]
}