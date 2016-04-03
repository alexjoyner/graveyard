'use strict';
var express = require('express'),
    router = express.Router();

var jwt_verify = require('../../middleware/jwt_verify.js')
// Mongoose models
var issues = require('../../models/issueModel.js');
var points = require('../../models/pointModel.js');
var supports = require('../../models/supportModel.js');

// !! route = '/votes'

// ###########  POSTS  ###############
// Post vote for issue
router.post('/issue', jwt_verify, function(req, res) {
    var voteType = req.body.voteType, // 'upvote' or 'downvote'
        issueId = req.body.issueId;
    // Build order
    var query = {
        '_id': issueId
    };
    var incOrder;
    if (voteType === 'upvote') {
        incOrder = {
            '$inc': {
                'ups': 1
            }
        };
    } else {
        incOrder = {
            '$inc': {
                'downs': 1
            }
        };
    }
    issues
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
});
// Post vote for point
router.post('/point', jwt_verify, function(req, res) {
    var voteType = req.body.voteType, // 'upvote' or 'downvote'
        pointId = req.body.pointId;
    // Build order
    var query = {
        '_id': pointId
    };
    var incOrder;
    if (voteType === 'upvote') {
        incOrder = {
            '$inc': {
                'ups': 1
            }
        };
    } else {
        incOrder = {
            '$inc': {
                'downs': 1
            }
        };
    }
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
});
// Post vote for support
router.post('/support', jwt_verify, function(req, res) {
    var voteType = req.body.voteType, // 'upvote' or 'downvote'
        supportId = req.body.supportId;
    // Build order
    var query = {
        '_id': supportId
    };
    var incOrder;
    if (voteType === 'upvote') {
        incOrder = {
            '$inc': {
                'ups': 1
            }
        };
    } else {
        incOrder = {
            '$inc': {
                'downs': 1
            }
        };
    }
    console.log('Query: ', query);
    console.log('incOrder: ', incOrder);
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
});
module.exports = router;