'use strict';
var express = require('express'),
    router = express.Router();

var jwt_verify = require('../../middleware/jwt_verify.js')
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = "postgres://rosco:@localhost:5432/postgres";
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
    var postData = req.body;
    console.log('NEW SUPPORT: ', postData);
    //this initializes a connection pool
    //it will keep idle connections open for a (configurable) 30 seconds
    //and set a limit of 10 (also configurable)
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        INSERT INTO 
            supports(
                owner_id,
                issue_id,
                point_id,
                type,
                evidence,
                detail,
                source,
                sourcetype)
            VALUES(
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7,
                $8)
            RETURNING
                *
        ;
      `;
      var info = [
            postData.owner_id,
            postData.issue_id,
            postData.point_id,
            postData.type,
            postData.evidence,
            postData.detail,
            postData.source,
            postData.sourcetype]
      console.log(info);
      client.query(queryString, info, function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        res.status(200).send(result.rows[0]).end();
      });
    });
    /*console.log('Req body: ', req.body);
    var support = new supports(req.body);
    support.save(function(err){
        if(err) throw err;
        res.status(200).send('AYE OK').end();
    });*/
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