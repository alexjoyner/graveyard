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
	passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) {
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
                    if (result.rows[0]) {
                        return done(null, false, {
                            message: 'That email already taken'
                        });
                    } else {
                        queryString = `
                        INSERT INTO 
                            users   
                            (email,password, zipcode)
                        VALUES      
                            ($1,$2, $3)
                        RETURNING
                            *
                        ;`;
                        client.query(queryString, [email, generateHash(password), req.body.zipcode], function(err, newUser) {
                            //call `done()` to release the client back to the pool
                            doneConnect();
                            if (err) throw err;
                            newUser.rows[0]['votes'] = [];
                            newUser.rows[0]['follows'] = [];
                            newUser.rows[0]['favorites'] = [];
                            var token = jwt.sign({
                                id: newUser.rows[0]._id,
                                email: newUser.rows[0].email
                            }, superSecret, {
                              expiresIn: 1440 * 60 // <-- expires in 24 hours
                            });
                            return done(null, {
                              profile: newUser.rows[0],
                              success: true,
                              message: 'Enjoy your token!',
                              token: token
                            });
                        });
                    }
                  });
                });
            });
        }
    ));
}

function generateHash(pass) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    // Store hash in your password DB.
    return hash;
};