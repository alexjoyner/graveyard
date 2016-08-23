// Dependencies
var LocalStrategy = require('passport-local').Strategy;
var config = require('../../../config/config.js');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcrypt');
var superSecret = config.secret; //Secret var for jsonWebTokens
var get_user_by_email = require('../get_user_by_email/_core_function');
var create_new_user = require('../post_new_user/_core_function');

module.exports = function(passport){
	passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, callback) {
            process.nextTick(function() {
                get_user_by_email(req, email, function (err, user) {
                    if(err) return callback(err);
                    if(user){
                        return callback(null, false, {
                            message: 'That email already taken'
                        });
                    }
                    create_new_user(req, email, generateHash(password), req.body.zipcode,
                        function(err, new_user){
                        if (err) throw err;
                        var token = jwt.sign({
                            id: new_user._id,
                            email: new_user.email
                        }, superSecret, {
                            expiresIn: 1440 * 60 // <-- expires in 24 hours
                        });
                        return callback(null, {
                            profile: new_user,
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                    })
                })
            });
        }
    ));
};
function generateHash(pass) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    // Store hash in your password DB.
    return hash;
};