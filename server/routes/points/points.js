'use strict';
var express = require('express'),
    router = express.Router();
var config = require('../../config/config.js');
var jwt_verify = require('../../middleware/jwt_verify.js')
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;

// Mongoose models
var points = require('../../models/pointModel.js');
var supports = require('../../models/supportModel.js');

// !! route = '/points'

// ###########  GETS  ###############
// get points set by id
router.get('/getPoints/:type/:issueId', function(req, res) {
    //this initializes a connection pool
    //it will keep idle connections open for a (configurable) 30 seconds
    //and set a limit of 10 (also configurable)
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `

        SELECT row_to_json(t)
        FROM (
            SELECT 
                p.*,
                json_agg(s.*) as supports
            FROM points p
            LEFT JOIN posts s 
            ON 
                (p._id = s._id)
            WHERE
                p._id = $1
            GROUP BY 
                p._id
        ) AS points
        FROM 
            posts 
        WHERE 
            _id = $1
      `;
      client.query(queryString, [req.params.issueId/*, req.params.type*/], function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        console.log(result.rows);
        if (!result.rows[0]) {
            res.status(200).send([]).end();
        } else {
            res.status(200).send(result.rows).end();
        }
      });
    });
    /*points
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
        });*/
});
// ###########  POSTS  ###############
// post new point set
router.post('/createPoint', jwt_verify, function(req, res) {
    var info = req.body;
    //this initializes a connection pool
    //it will keep idle connections open for a (configurable) 30 seconds
    //and set a limit of 10 (also configurable)
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        INSERT INTO 
            points(
                owner_id,
                issue_id,
                type,
                problem,
                detail)
            VALUES(
                $1,
                $2,
                $3,
                $4,
                $5)
            RETURNING
                *
        ;
      `;
      client.query(queryString, [
            info.owner_id,
            info.issue_id,
            info.type,
            info.problem,
            info.detail], function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        result.rows[0]['supports'] = [null];
        res.status(200).send(result.rows[0]).end();
      });
    });
    /*console.log('Create Point: ', req.body);

    var point = new points(req.body);

    point.save(function(err, savedPoint) {
        if (err) throw err;
        res.status(200).send(savedPoint).end();
    });*/
});
// post update to point
router.post('/updatePoint', jwt_verify, function(req, res){
    var point = req.body;
    console.log(point);
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        UPDATE
            points
        SET 
            problem = $1,
            detail = $2
        WHERE
            _id = $3::int;
      `;
      client.query(queryString, [point.problem, point.detail, +point._id], function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        res.status(200).send('UPDATED').end();
      });
    });
    /*points
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
        })*/
});
// ###########  DELETES  ###############
// delete point by id
router.delete('/deletePoint/:type/:issue_id/:pointId', jwt_verify, function(req, res) {
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        DELETE
        FROM points
        WHERE
            _id = $1::int;
      `;
      client.query(queryString, [req.params.pointId], function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        res.status(200).send('DELETED').end();
      });
    });
    /*var type = req.params.type,
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
    });*/
});


module.exports = router;