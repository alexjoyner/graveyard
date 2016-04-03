'use strict';
var express = require('express'),
    router = express.Router();

var jwt_verify = require('../../middleware/jwt_verify.js')
// Mongoose models
var supports = require('../../models/supportModel.js');

// !! route = '/support'

// ###########  GETS  ###############
router.get('/getSupport/:pointId', function(req, res){
	var pointId = req.params.pointId;
    console.log('pointId: ', pointId);
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
router.post('/createSupportPoint', jwt_verify, function(req, res) {
    console.log('Req body: ', req.body);
    var support = new supports(req.body);
    support.save(function(err){
        if(err) throw err;
        res.status(200).send('AYE OK').end();
    });
});

// ###########  DELETES  ###############
// delete PRO support point
router.delete('/removeSupportPoint/:supportId', jwt_verify, function(req, res) {
    var supportId = req.params.supportId;
    supports.findOneAndRemove({
        '_id': supportId
    }, function(err){
        if(err) throw err;
        res.status(200).send('Deleted');
    });
});

module.exports = router;