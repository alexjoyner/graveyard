'use strict';
var express = require('express'),
    router = express.Router();

var jwt_verify = require('../../middleware/jwt_verify.js')
// Mongoose models
var issues = require('../../models/issueModel.js');
var points = require('../../models/pointModel.js');
var supports = require('../../models/supportModel.js');
var users = require('../../models/userModel.js');
var votes = require('../../models/voteModel.js');
// !! route = '/votes'

// ###########  POSTS  ###############
// Post vote for issue
router.post('/issue', jwt_verify, function(req, res) {
    var voteType = req.body.voteType, // 'upvote' or 'downvote'
        issueId = req.body.issueId,
        profile = req.decoded;

    // Build order
    var query = {
        '_id': issueId
    };
    var incOrder,
        voteType;
    if (voteType === 'upvote') {
        voteType = 1;
        incOrder = {
            '$inc': {
                'ups': 1
            }
        };
    } else {
        voteType = 2;
        incOrder = {
            '$inc': {
                'downs': 1
            }
        };
    }
    // Step 1: find if the user has voted on the issue
        // NO 
            // Step 2: Create a couter for responses
            // Step 3: Create new vote for user on issue
            // Step 4: Modify score in isues
        // YES 
            // Step 2: Error, already voted

    votes
        .findOne({ // Step 1
            $and: [{
                'userId': profile.id
            },{
                'itemId': issueId
            }]
        })
        .exec(function(err, vote){
            if(err) throw err;
            if(vote){ // Step 1.YES
                res.status(500).send('Vote already cast').endl;
            }else{ // Step 1.NO
                var newVote = new votes();
                newVote.itemId = issueId;
                newVote.itemType = 1;
                newVote.userId = profile.id;
                newVote.voteType = voteType;
                newVote.save(function(err){
                    if(err) throw err;
                    issues // Step 1.4
                        .findOneAndUpdate(query, incOrder)
                        .select('ups downs')
                        .exec(function(err, issue) {
                            if (err) throw err;
                            if (!issue) {
                                res.status(500).send('No Issue Found');
                            } else {
                                if(shouldReturn){
                                    res.status(200).send(voteType + ' successful').end();
                                }else{
                                    shouldReturn = !shouldReturn;
                                }
                            }
                        });
                })
                

            }
        })
    
});
// Post vote for point
router.post('/point', jwt_verify, function(req, res) {
    var voteType = req.body.voteType, // 'upvote' or 'downvote'
        pointId = req.body.pointId,
        profile = req.decoded;

    // Build order
    var query = {
        '_id': pointId
    };
    var incOrder;
    var voteType;
    if (voteType === 'upvote') {
        voteType = 1;
        incOrder = {
            '$inc': {
                'ups': 1
            }
        };
    } else {
        voteType = 2;
        incOrder = {
            '$inc': {
                'downs': 1
            }
        };
    }
    votes
        .findOne({ // Step 1
            $and: [{
                'userId': profile.id
            },{
                'itemId': pointId
            }]
        })
        .exec(function(err, vote){
            if(err) throw err;
            if(vote){ // Step 1.YES
                res.status(500).send('Vote already cast').endl;
            }else{ // Step 1.NO
                var newVote = new votes();
                newVote.itemId = pointId;
                newVote.itemType = 2;
                newVote.userId = profile.id;
                newVote.voteType = voteType;
                console.log('New Vote', newVote);
                newVote.save(function(err){
                    if(err) throw err;
                    points
                        .findOneAndUpdate(query, incOrder)
                        .select('ups downs')
                        .exec(function(err, issue) {
                            if (err) throw err;
                            if (!issue) {
                                res.status(500).send('No Issue Found');
                            } else {
                                res.status(200).send(voteType + ' successful').end();
                            }
                        });
                })

            }
        })
});
// Post vote for support
router.post('/support', jwt_verify, function(req, res) {
    var voteType = req.body.voteType, // 'upvote' or 'downvote'
        supportId = req.body.supportId,
        profile = req.decoded;
    // Build order
    var query = {
        '_id': supportId
    };
    var incOrder;
    var voteType;
    if (voteType === 'upvote') {
        voteType = 1;
        incOrder = {
            '$inc': {
                'ups': 1
            }
        };
    } else {
        voteType = 2;
        incOrder = {
            '$inc': {
                'downs': 1
            }
        };
    }
    votes
        .findOne({ // Step 1
            $and: [{
                'userId': profile.id
            },{
                'itemId': supportId
            }]
        })
        .exec(function(err, vote){
            if(err) throw err;
            if(vote){ // Step 1.YES
                res.status(500).send('Vote already cast').endl;
            }else{ // Step 1.NO
                var newVote = new votes();
                newVote.itemId = supportId;
                newVote.itemType = 3;
                newVote.userId = profile.id;
                newVote.voteType = voteType;
                console.log('New Vote: ', newVote);
                newVote.save(function(err){
                    if(err) throw err;
                    supports
                        .findOneAndUpdate(query, incOrder)
                        .select('ups downs')
                        .exec(function(err, support) {
                            if (err) throw err;
                            if (!support) {
                                res.status(500).send('No Issue Found');
                            } else {
                                res.status(200).send(voteType + ' successful').end();
                            }
                        });
                })
            }
        })
});
module.exports = router;