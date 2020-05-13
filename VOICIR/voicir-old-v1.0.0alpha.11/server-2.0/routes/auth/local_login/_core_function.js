// Dependencies
var config = require('../../../config/config.js');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var superSecret = config.secret; //Secret var for jsonWebTokens
var async = require('async');
var get_user_by_email = require('../get_user_by_email/_core_function');
var get_user_followers = require('../../follows/get_my_follows/_core_function');
var get_user_favorites = require('../../favorites/get_my_favorites/_core_function');
var get_user_votes = require('../../votes/get_my_votes/_core_function');
import {roCache, validate_password} from '../../../../server';
/* LOCAL VARS*/
var client, cache_location;

module.exports = function (req, callback) {
	var userTryInfo = req.body,
		email = userTryInfo.email,
		password = userTryInfo.password;
	client = req.roConClient;
	cache_location = 'user_' + userTryInfo.email.toLowerCase();

	roCache(req,cache_location, function(err, cached_test){
		if(cached_test){
			callback(null, cached_test);
			return;
		}
		get_user_by_email(req, email, function(err, user){
			if (err)
				return callback(err);
			if (!user) {
				return callback(null, null, {
					message: 'Invalid Email'
				});
			}
			if (!validate_password(password, user.password)) {
				return callback(null, null, {
					message: 'Invalid password'
				});
			}
			// if user is found and password is right
			// create a token
			req.decoded = {
				id: user._id
			};
			var token = jwt.sign({
				id: user._id,
				email: user.email
			}, superSecret, {
				expiresIn: 1440 * 60 * /*Days*/7// <-- expires in 7 days
			});
			async.parallel([
				function(next){
					get_user_followers(req, next);
				},
				function(next){
					get_user_favorites(req, next);
				},
				function(next){
					get_user_votes(req, next);
				}
			], function(err, result){
				if (err) throw err;
				user['follows'] = result[0];
				user['favorites'] = result[1];
				user['votes'] = result[2];
				return callback(null, {
					profile: user,
					success: true,
					message: 'Enjoy your token!',
					token: token
				});
			})
		});

	}, true);
};