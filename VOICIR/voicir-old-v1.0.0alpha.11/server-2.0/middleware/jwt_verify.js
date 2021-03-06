
// Dependencies
var config = require('../config/config.js');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var superSecret = config.secret; //Secret var for jsonWebTokens
// Verify a JSON WEB TOKEN
module.exports = function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  console.log(req.body);
  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, superSecret, function(err, decoded) {      
      if (err) {
        return res.status(403).send('Session timeout please log in again.');    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });
  } else {

    // if there is no token
    // return an error
    return res.status(403).send('No token provided.');
    
  }
};