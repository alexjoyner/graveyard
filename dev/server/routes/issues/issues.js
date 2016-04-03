'use strict';
var express = require('express'),
    router = express.Router();
var jwt_verify = require('../../middleware/jwt_verify.js')
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
        .select('mainQuestion questionDetail ups downs')
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
router.post('/newIssue',jwt_verify, function(req, res) {
    console.log(req.body);
    var newIssue = new issues(req.body);
    newIssue.save(function(err, returned) {
        if (err) throw err;
        console.log('returned: ', returned);
        res.status(200).send(returned._id).end();
    });
});
router.post('/updateIssue',jwt_verify, function(req, res){
    var issue = req.body;
    console.log(issue);
    issues
        .update({
            '_id': issue._id
        }, {
            $set: {
                mainQuestion: issue.mainQuestion,
                questionDetail: issue.questionDetail
            }
        }, function(err){
            if (err) throw err;
            res.status(200).send('success');
        })
});
// post update to existing issue

// ###########  DELETES  ###############
// delete existing issue
router.delete('/deleteIssue/:issueId',jwt_verify, function(req, res) {
    issues.findOne({
        '_id': req.params.issueId
    }, function(err, issue) {
        if (err) throw err;
        issue.remove(function(err){
            if (err) throw err;
            res.status(200).send('success');
        });
    });
});

module.exports = router;