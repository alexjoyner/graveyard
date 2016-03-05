'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var points = require('../../models/pointModel.js');

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
router.post('/createPoint', function(req, res) {
    var type = req.body.type,
        issueId = req.body.issueId,
        newPointData = req.body.newPoint;

    console.log('Create Point: ', req.body);

    var point = new points(newPointData);
    point.issue_id = issueId;
    point.type = type;
    point.save(function(err){
        if(err) throw err;
        res.status(200).send('AYE OK').end();
    });
});
// post update to point

// ###########  DELETES  ###############
// delete point by id
router.delete('/deletePoint/:pointId', function(req, res) {
    var type = req.params.type,
        issueId = req.params.issueId,
        pointId = req.params.pointId;
    points.findOneAndRemove({
        '_id': pointId
    }, function(err){
        if(err) throw err;
        res.status(200).send('Deleted');
    });
});


module.exports = router;