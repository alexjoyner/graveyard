'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var issues = require('../../models/issueModel.js');

// !! route = '/votes'

// ###########  POSTS  ###############
// Post vote for issue
router.post('/issue', function(req, res) {
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
router.post('/point', function(req, res) {
    var voteType = req.body.voteType, // 'upvote' or 'downvote'
        issueId = req.body.issueId,
        pointType = req.body.pointType, // 'pros' or 'cons'
        pointId = req.body.pointId;
    // Build order
    var query = {
        '_id': issueId
    };
    query[pointType + '._id'] = pointId;

    var incOrder = {
        '$inc': {
        }
    };
    incOrder.$inc[pointType+'.$.'+voteType] = 1;
    console.log(incOrder);
    issues
        .findOneAndUpdate(query, incOrder)
        .select('ups downs')
        .exec(function(err, issue) {
            if (err) throw err;
            console.log('Hello');
            if (!issue) {
                res.status(500).send('No Issue Found');
            } else {
                res.status(200).send(voteType + ' successful').end();
            }
        });
});
// Post vote for support
router.post('/support', function(req, res) {
    var voteType = req.body.voteType, // 'upvote' or 'downvote'
        issueId = req.body.issueId,
        pointType = req.body.pointType, // 'pros' or 'cons'
        pointId = req.body.pointId,
        supportId = req.body.supportId;
    // Build order
    /*var query = {
        '_id': issueId
    };
    query[pointType + '._id'] = pointId;

    var incOrder = {
        '$inc': {
        }
    };*/
    console.log(req.body);
    issues
        .findOneAndUpdate({
            '_id': issueId,
            'pros._id': pointId,
            'support._id': supportId
        }, {
            '$inc': {
                'pros.$.support.$.ups': 1
            }
        })
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
module.exports = router;