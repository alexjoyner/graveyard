var async = require('async');
/* LOCAL VARS*/
var client;
import {get_new_mod_amount, get_update_mod_amount} from '../../../../utils/_server_utils';
var get_vote = require('../get_vote/_core_function');
var post_new_vote = require('../post_new_vote/_core_function');
var post_update_vote = require('../post_update_vote/_core_function');
module.exports = function (req, callback) {
	client = req.roConClient;
	var newVote = req.body;
	var modInfo; // {modAmount: XXX, modVoteType: XXX}
	async.waterfall([
		function (next) {
			// Check if there is already a vote
			get_vote(req, next);
		},
		function (oldVote, next){
			// If there wasn't a vote, make a new one, else update
			if(!oldVote){
				modInfo = get_new_mod_amount(newVote.vote_type_id);
				post_new_vote(req, next);
			}else{
				modInfo = get_update_mod_amount(oldVote.vote_type_id, newVote.vote_type_id);
				post_update_vote(req, {_id: oldVote._id, vote_type_id: modInfo.modVoteType}, next);
			}
		}
	], function (err) {
		if (err) throw err;
		callback(null, {modAmount: modInfo.modAmount, modTo: modInfo.modVoteType})
	});
};