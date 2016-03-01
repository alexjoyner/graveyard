'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var issues = require('../../models/issueModel.js');

// !! route = '/issues'

// ###########  GETS  ###############
// get all
router.get('/all', function(req, res) {
    issues
        .find()
        .select('mainQuestion')
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
    issues.findOne({
            'mainQuestion': req.body.mainQuestion
        },
        function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                console.log('New issue');
                console.log('Issue info: ', req.body);
                var newIssue = new issues(req.body);
                console.log(newIssue);
                newIssue.save(function(err, roomReturned) {
                    if (err) throw err;
                    res.status(200).send(newIssue).end();
                });
            } else {
                res.status(500).send('Issue already taken').end();
            }
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
            res.status(200).send('Deleted event');
        }
        res.end();
    });
});


router.post('/addPro', function(req, res) {
    var info = req.body;
    /*
    Info needed - {
        issueId //  / To make sure pros correspon to issue
        prosId  //  / Search for pros associated with issue &
                    / create new set of pros if none exist
    }
    */
    issues.findOne({
            '_id': req.params.id
        },
        function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                anIssue.pros.unshift(req.body);
                anIssue.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(anIssue).end();
                });
            }
        });
});

router.post('/:id/addCon', function(req, res) {
    issues.findOne({
            '_id': req.params.id
        },
        function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                anIssue.cons.unshift(req.body);
                anIssue.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(anIssue).end();
                });
            }
        });
});
router.post('/addSupport', function(req, res) {
    res.status(200).send('Got data: ', req.body).end();
});

router.delete('/deleteMainPoint/:type/:issueId/:pointId', function(req, res) {
    issues.findOne({
            '_id': req.params.issueId
        },
        function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                if (req.params.type === 'pro') {
                    anIssue.pros.pull({ '_id': req.params.pointId });
                } else {
                    anIssue.cons.pull({ '_id': req.params.pointId });
                }
                anIssue.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(anIssue).end();
                });
            }
        });
});
module.exports = router;