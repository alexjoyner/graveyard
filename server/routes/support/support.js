'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var issues = require('../../models/issueModel.js');

// !! route = '/support'

// ###########  GETS  ###############

// ###########  POSTS  ###############
// post create pro support point
router.post('/createProSupport', function(req, res) {
    var issueId = req.body.issueId,
        pointId = req.body.pointId,
        newSupportData = req.body.newSupportData;
    issues
        .findOne({
            '_id': issueId
        })
        .select('pros')
        .exec(function(err, proSet) {
            if (err) throw err;
            if (!proSet) {
                res.status(500).send('no issues found').end();
            } else {
                var pro = proSet.pros.id(pointId);
                pro.support.push(req.body.newSupportData);
                proSet.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(proSet).end();
                });
            }
        });
});
// post create con support point

// ###########  DELETES  ###############
// delete support point
router.delete('/removeProSupport/:issueId/:pointId/:supportId', function(req, res) {
    var issueId = req.params.issueId,
        pointId = req.params.pointId,
        supportId = req.params.supportId;
    issues
        .findOne({
            '_id': issueId
        })
        .select('pros')
        .exec(function(err, proSet) {
            if (err) throw err;
            if (!proSet) {
                res.status(500).send('no issues found').end();
            } else {
                console.log('proSet: ', proSet);
                proSet.pros.id(pointId).support.id(supportId).remove();
                proSet.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(proSet).end();
                });
            }
        });
});

module.exports = router;