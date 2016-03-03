'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var issues = require('../../models/issueModel.js');

// !! route = '/points'

// ###########  GETS  ###############
// get points set by id
router.get('/getPoints/:type/:id', function(req, res) {
    issues
        .findOne({
            '_id': req.params.id
        })
        .select(req.params.type)
        .exec(function(err, points) {
            if (err) throw err;
            if (!points)
                res.status(500).send('No Points Found').end();
            if (points)
                res.status(200).send(points).end();
        });
});
// ###########  POSTS  ###############
// post new point set
router.post('/createPoint', function(req, res) {
    var type = req.body.type;
    console.log(req.body);
    issues.findOne({
            '_id': req.body.issueId
        },
        function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                var setFlag; // set true if you push a point
                if (type === 'pros') {
                    anIssue.pros.push(req.body.newPoint);
                    setFlag = true;
                } else
                if (type === 'cons') {
                    anIssue.cons.push(req.body.newPoint);
                    setFlag = true;
                } else {
                    res.status(500).send('No type sent').end();
                }
                if (setFlag) {
                    anIssue.save(function(err) {
                        if (err) throw err;
                        res.status(200).send(anIssue).end();
                    });
                }
            }
        });
});
// post update to point

// ###########  DELETES  ###############
// delete point by id
router.delete('/deletePoint/:type/:issueId/:pointId', function(req, res) {
    issues.findOne({
            '_id': req.params.issueId
        },
        function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                anIssue.points.pull({
                    '_id': req.params.pointId
                });
                anIssue.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(anIssue).end();
                });
            }
        });
});


module.exports = router;