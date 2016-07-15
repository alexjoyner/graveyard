// Dependencies
var LocalStrategy = require('passport-local').Strategy;
var config = require('../config.js');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcrypt');
var superSecret = config.secret; //Secret var for jsonWebTokens
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;

module.exports = function(passport){
	passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, done) {
        process.nextTick(function() {
            //this initializes a connection pool
            //it will keep idle connections open for a (configurable) 30 seconds
            //and set a limit of 10 (also configurable)
            pg.connect(conString, function(err, client, doneConnect) {
              if(err) {
                return console.error('error fetching client from pool', err);
              }
              var queryString = `
                SELECT 
                    *
                FROM users
                WHERE
                    users.email = $1 
                ;
              `;
              client.query(queryString, [email], function(err, result) {
                if (err)
                    return done(err);
                if (!result.rows[0]) {
                    return done(null, false, {
                        message: 'Invalid Email'
                    });
                }else
                if (!validPassword(password, result.rows[0].password)) {
                    return done(null, false, {
                        message: 'Invalid password'
                    });
                }else {
                    client.query(`
                        SELECT
                            post_id, vote_type_id
                        FROM 
                            votes
                        WHERE 
                            user_id = $1`, [result.rows[0]._id],
                    function(verr, votes){
                        doneConnect();
                        if (verr)
                            return done(verr);
                        if (!votes.rows) {
                            return done(null, false, {
                                message: 'Invalid Email'
                            });
                        }else{
                            result.rows[0]['votes'] = votes.rows;
                            // if user is found and password is right
                            // create a token
                            var token = jwt.sign({
                                id: result.rows[0]._id,
                                email: result.rows[0].email
                            }, superSecret, {
                              expiresIn: 1440 * 60 * 7// <-- expires in 7 days
                            });
                            return done(null, {
                              profile: result.rows[0],
                              success: true,
                              message: 'Enjoy your token!',
                              token: token
                            });
                        }
                    })
                }
              });
            });
        });
    }));
}


function generateHash(pass) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    // Store hash in your password DB. 
    return hash;
};
function validPassword(pass, realPass) {
    // Load hash from your password DB. 
    return bcrypt.compareSync(pass, realPass);
};