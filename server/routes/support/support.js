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
router.post('/createConSupport', function(req, res) {
    var issueId = req.body.issueId,
        pointId = req.body.pointId,
        newSupportData = req.body.newSupportData;
    issues
        .findOne({
            '_id': issueId
        })
        .select('cons')
        .exec(function(err, conSet) {
            if (err) throw err;
            if (!conSet) {
                res.status(500).send('no issues found').end();
            } else {
                var con = conSet.cons.id(pointId);
                con.support.push(req.body.newSupportData);
                conSet.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(conSet).end();
                });
            }
        });
});

// ###########  DELETES  ###############
// delete PRO support point
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
// delete CON support point
router.delete('/removeConSupport/:issueId/:pointId/:supportId', function(req, res) {
    var issueId = req.params.issueId,
        pointId = req.params.pointId,
        supportId = req.params.supportId;
    issues
        .findOne({
            '_id': issueId
        })
        .select('cons')
        .exec(function(err, conSet) {
            if (err) throw err;
            if (!conSet) {
                res.status(500).send('no issues found').end();
            } else {
                console.log('conSet: ', conSet);
                conSet.cons.id(pointId).support.id(supportId).remove();
                conSet.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(conSet).end();
                });
            }
        });
});

module.exports = router;