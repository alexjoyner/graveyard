'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var issues = require('../../models/issueModel.js');

// !! route = '/support'

// ###########  GETS  ###############

// ###########  POSTS  ###############
// post create support point
router.post('/createSupportPoint', function(req, res) {
    var type = req.body.type,
        issueId = req.body.issueId,
        pointId = req.body.pointId,
        newSupportData = req.body.newSupportData;
    console.log('req.body: ', req.body);
    issues
        .findOne({
            '_id': issueId
        })
        .select(type)
        .exec(function(err, pointSet) {
            if (err) throw err;
            if (!pointSet) {
                res.status(500).send('no issues found').end();
            } else {
                var support,
                    setFlag; // set true if you push a point
                if (type === 'pros') {
                    support = pointSet.pros.id(pointId);
                    support.support.push(req.body.newSupportData);
                    setFlag = true;
                } else
                if (type === 'cons') {
                    support = pointSet.cons.id(pointId);
                    support.support.push(req.body.newSupportData);
                    setFlag = true;
                } else {
                    res.status(500).send('No type sent').end();
                }
                if (setFlag) {
                    pointSet.save(function(err) {
                        if (err) throw err;
                        res.status(200).send(pointSet).end();
                    });
                }
            }
        });
});

// ###########  DELETES  ###############
// delete PRO support point
router.delete('/removeSupportPoint/:type/:issueId/:pointId/:supportId', function(req, res) {
    var type = req.params.type,
        issueId = req.params.issueId,
        pointId = req.params.pointId,
        supportId = req.params.supportId;
    issues
        .findOne({
            '_id': issueId
        })
        .select('pros')
        .exec(function(err, pointSet) {
            if (err) throw err;
            if (!pointSet) {
                res.status(500).send('no issues found').end();
            } else {
                var setFlag; // set true if you push a point
                if (type === 'pros') {
                    pointSet.pros.id(pointId).support.id(supportId).remove();
                    setFlag = true;
                } else
                if (type === 'cons') {
                    pointSet.pros.id(pointId).support.id(supportId).remove();
                    setFlag = true;
                } else {
                    res.status(500).send('No type sent').end();
                }
                if (setFlag) {
                    pointSet.save(function(err) {
                        if (err) throw err;
                        res.status(200).send(pointSet).end();
                    });
                }
            }
        });
});

module.exports = router;