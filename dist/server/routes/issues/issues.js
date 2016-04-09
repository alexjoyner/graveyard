'use strict';
var express = require('express'),
    router = express.Router();
var jwt_verify = require('../../middleware/jwt_verify.js')
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = "postgres://rosco:@localhost:5432/postgres";

// Mongoose models
var issues = require('../../models/issueModel.js');
var points = require('../../models/pointModel.js');

// !! route = '/issues'

// ###########  GETS  ###############
// get all
router.get('/all', function(req, res) {
    //this initializes a connection pool
    //it will keep idle connections open for a (configurable) 30 seconds
    //and set a limit of 10 (also configurable)
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        SELECT *
        FROM issues;
      `;
      client.query(queryString, function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        if (!result.rows[0]) {
            res.status(500).send('no issues found').end();
        } else {
            res.status(200).send(result.rows).end();
        }
      });
    });
    /*issues
        .find()
        .exec(function(err, allIssues) {
            if (err) throw err;
            if (!allIssues) {
                res.status(500).send('no issues found').end();
            } else {
                res.status(200).send(allIssues).end();
            }
        });*/
});
// get one by id
router.get('/:id', function(req, res) {
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        SELECT *
        FROM issues
        WHERE
            issues._id = $1::int;
      `;
      client.query(queryString, [req.params.id], function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        if (!result.rows[0]) {
            res.status(500).send('no issues found').end();
        } else {
            res.status(200).send(result.rows[0]).end();
        }
      });
    });
    /*issues
        .findOne({
            '_id': req.params.id
        })
        .exec(function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                res.status(200).send(anIssue).end();
            }
        });*/
});

// ###########  POSTS   ###############
// post new issue
router.post('/newIssue',jwt_verify, function(req, res) {
    console.log('body: ', req.body);
    var post = req.body;
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        INSERT INTO
            issues (
            owner_id,
            mainquestion,
            questiondetail)
        VALUES (
            $1::INT,
            $2,
            $3)
        RETURNING
            _id
      `;
      client.query(queryString, [
            req.decoded.id, 
            post.mainquestion, 
            post.questiondetail], function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        console.log(result.rows[0]);
        res.status(200).send(result.rows[0]).end();
      });
    });
    // console.log(req.body);
    // var newIssue = new issues(req.body);
    // newIssue.save(function(err, returned) {
    //     if (err) throw err;
    //     console.log('returned: ', returned);
    //     res.status(200).send(returned._id).end();
    // });
});
router.post('/updateIssue',jwt_verify, function(req, res){
    var issue = req.body;
    console.log(issue);
    issues
        .update({
            '_id': issue._id
        }, {
            $set: {
                mainquestion: issue.mainquestion,
                questiondetail: issue.questiondetail
            }
        }, function(err){
            if (err) throw err;
            res.status(200).send('success');
        })
});
// post update to existing issue

// ###########  DELETES  ###############
// delete existing issue
router.delete('/deleteIssue/:issueId',jwt_verify, function(req, res) {
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        DELETE
        FROM issues
        WHERE
            issues._id = $1::int;
      `;
      client.query(queryString, [req.params.issueId], function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        res.status(200).send('DELETED').end();
      });
    });
    /*issues.findOne({
        '_id': req.params.issueId
    }, function(err, issue) {
        if (err) throw err;
        issue.remove(function(err){
            if (err) throw err;
            res.status(200).send('success');
        });
    });*/
});

module.exports = router;