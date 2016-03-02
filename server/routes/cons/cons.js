'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var issues = require('../../models/issueModel.js');

// !! route = '/cons'

// ###########  GETS  ###############
// get cons set by id
router.get('/getCons/:id', function(req, res) {
    issues
        .findOne({
            '_id': req.params.id
        })
        .select('cons')
        .exec(function(err, cons) {
            if (err) throw err;
            if (!cons)
                res.status(500).send('No Cons Found').end();
            if (cons)
                res.status(200).send(cons).end();

        });
});
// ###########  POSTS  ###############
// post new con set
router.post('/createCon', function(req, res) {
    console.log('Create con: ', req.body);
    issues.findOne({
            '_id': req.body.issueId
        },
        function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                anIssue.cons.push(req.body.newPointData);
                anIssue.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(anIssue).end();
                });
            }
        });
});
// post update to con

// ###########  DELETES  ###############
// delete con by id
router.delete('/deleteCon/:issueId/:conId', function(req, res) {
    issues.findOne({
            '_id': req.params.issueId
        },
        function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                anIssue.cons.pull({
                    '_id': req.params.conId
                });
                anIssue.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(anIssue).end();
                });
            }
        });
});


module.exports = router;