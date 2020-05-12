'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var supports = require('../../models/supportModel.js');

// !! route = '/support'

// ###########  GETS  ###############
router.get('/getSupport/:pointId', function(req, res){
	var pointId = req.params.pointId;

	supports
		.find({
			'point_id': pointId
		}, function(err, support){
			if(err) throw err;
			res.status(200).send(support);
		});
});


// ###########  POSTS  ###############
// post create support point
router.post('/createSupportPoint', function(req, res) {
    var type = req.body.type,
        issueId = req.body.issueId,
        pointId = req.body.pointId,
        newSupportData = req.body.newSupportData;

    console.log('req.body: ', req.body);

    var support = new supports(newSupportData);
    support.point_id = pointId;
    support.type = type;
    support.save(function(err){
        if(err) throw err;
        res.status(200).send('AYE OK').end();
    });
});

// ###########  DELETES  ###############
// delete PRO support point
router.delete('/removeSupportPoint/:supportId', function(req, res) {
    var supportId = req.params.supportId;
    supports.findOneAndRemove({
        '_id': supportId
    }, function(err){
        if(err) throw err;
        res.status(200).send('Deleted');
    });
});

module.exports = router;