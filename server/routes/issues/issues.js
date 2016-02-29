'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var issues = require('../../models/issueModel.js');

router.get('/all', function(req, res) {
    issues.find({},
        function(err, allIssues) {
            if (err) throw err;
            if (!allIssues) {
                res.status(500).send('no issues found').end();
            } else {
                res.status(200).send(allIssues).end();
            }
        });
});
router.get('/:id', function(req, res) {
    console.log('Searching for issue: ', req.params.id);
    issues.findOne({
            '_id': req.params.id
        },
        function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                res.status(200).send(anIssue).end();
            }
        });
});
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
router.post('/:id/addPro', function(req, res) {
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
router.post('/addSupport', function(req, res){
    res.status(200).send('Got data: ', req.body).end();
});
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
                }
                else {
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