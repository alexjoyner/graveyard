'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var issues = require('../../models/issueModel.js');
var points = require('../../models/pointModel.js');

// !! route = '/issues'

// ###########  GETS  ###############
// get all
router.get('/all', function(req, res) {
    issues
        .find()
        .select('mainQuestion ups downs')
        .exec(function(err, allIssues) {
            if (err) throw err;
            if (!allIssues) {
                res.status(500).send('no issues found').end();
            } else {
                res.status(200).send(allIssues).end();
            }
        });
});
// get one by id
router.get('/:id', function(req, res) {
    issues
        .findOne({
            '_id': req.params.id
        })
        .select('mainQuestion questionDetail')
        .exec(function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                res.status(200).send(anIssue).end();
            }
        });
});

// ###########  POSTS   ###############
// post new issue
router.post('/newIssue', function(req, res) {
    var newIssue = new issues(req.body);
    newIssue.save(function(err) {
        if (err) throw err;
        res.status(200).send(newIssue).end();
    });
});
// post update to existing issue

// ###########  DELETES  ###############
// delete existing issue
router.delete('/deleteIssue/:issueId', function(req, res) {
    issues.findOneAndRemove({
        '_id': req.params.issueId
    }, function(err) {
        if (err) {
            res.status(500).send('Internal error');
        } else {
            points.remove({
                'issue.id': req.params.issueId
            }, function(err) {
                if (err) throw err;
                res.status(200).send('Deleted Issue');
            });
        }
        res.end();
    });
});

module.exports = router;