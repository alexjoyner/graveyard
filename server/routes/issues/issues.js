'use strict';
var express = require('express'),
    router = express.Router();

var issuesData = require('./issueData');

router.get('/all', function(req, res) {
    res.status(200).send(issuesData);
    res.end();
});
router.get('/:id', function(req, res) {
    var indx = null;
    for (var i = 0; i < issuesData.length; i++) {
        if (issuesData[i]._id == req.params.id) {
            indx = i;
        }
    }
    res.status(200).send(issuesData[indx]);
    res.end();
});
router.post('/newIssue', function(req, res) {
    issuesData.unshift(req.body);
    res.status(200).send('Success Post');
    res.end();
});
router.post('/:id/addPro', function(req, res) {
    var indx = null;
    for (var i = 0; i < issuesData.length; i++) {
        if (issuesData[i]._id == req.params.id) {
            indx = i;
        }
    }
    issuesData[indx].pros.unshift(req.body);
    res.status(200).send('Successful');
    res.end();
});
router.post('/:id/addCon', function(req, res) {
    var indx = null;
    for (var i = 0; i < issuesData.length; i++) {
        if (issuesData[i]._id == req.params.id) {
            indx = i;
        }
    }
    issuesData[indx].cons.unshift(req.body);
    res.status(200).send('Successful');
    res.end();
});

module.exports = router;