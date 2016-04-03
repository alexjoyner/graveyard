'use strict';
var express = require('express'),
    router = express.Router();
var jwt_verify = require('../../middleware/jwt_verify.js')

// Mongoose models
var points = require('../../models/pointModel.js');
var supports = require('../../models/supportModel.js');

// !! route = '/points'

// ###########  GETS  ###############
// get points set by id
router.get('/getPoints/:type/:issueId', function(req, res) {
    points
        .find({
            'issue_id': req.params.issueId,
            'type': req.params.type
        })
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
router.post('/createPoint', jwt_verify, function(req, res) {

    console.log('Create Point: ', req.body);

    var point = new points(req.body);

    point.save(function(err, savedPoint) {
        if (err) throw err;
        res.status(200).send(savedPoint).end();
    });
});
// post update to point
router.post('/updatePoint', jwt_verify, function(req, res){
    var point = req.body;
    console.log(point);
    points
        .update({
            '_id': point._id
        }, {
            $set: {
                problem: point.problem,
                detail: point.detail
            }
        }, function(err){
            if (err) throw err;
            res.status(200).send('success');
        })
});
// ###########  DELETES  ###############
// delete point by id
router.delete('/deletePoint/:type/:issue_id/:pointId', jwt_verify, function(req, res) {
    var type = req.params.type,
        issueId = req.params.issue_id,
        pointId = req.params.pointId;
    points.findOne({
        '_id': pointId
    }, function(err, point) {
        if (err) throw err;
        point.remove(function(err){
            if (err) throw err;
            res.status(200).send('success');
        });
    });
});


module.exports = router;