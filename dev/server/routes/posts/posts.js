'use strict';
var express = require('express'),
    router = express.Router();
var config = require('../../config/config.js');
var jwt_verify = require('../../middleware/jwt_verify.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;
// !! route = '/posts'
// ###########  GETS  ###############
// get all
router.get('/all', function(req, res) {
    // CONFIGURE QUERY INFO
    var queryString = `
        SELECT *
        FROM posts
        WHERE
        post_type_id = 1;
    `;
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query(queryString, function(err, result) {
            //call `done()` to release the client back to the pool
            done();
            if (err) throw err;
            if (!result.rows[0]) {
                res.status(200).send([]).end();
            } else {
                res.status(200).send(result.rows).end();
            }
        });
    });
});
// get one by id
router.get('/:id/:type', function(req, res) {
    var type = undefined;
    switch (req.params.type) {
        case 'yes':
            type = 1;
            break;
        case 'no':
            type = 2;
            break;
        default:
            res.status(500).send('NO GOOD TYPE SENT');
    }
    if (type) {
        var queryString = `
        SELECT
            *,
            (
            SELECT array_to_json(array_agg(row_to_json(a)))
            FROM (
                SELECT
                    p.*,
                    json_agg(s.*) as supports
                FROM posts p
                LEFT JOIN (
                    SELECT
                        sup.*,
                        source_types.name as source_type,
                        point_types.name as point_type
                    FROM
                        posts sup
                    LEFT JOIN
                        source_types
                    ON
                        (sup.source_type_id = source_types._id)
                    LEFT JOIN
                        point_types
                    ON
                        (sup.point_type_id = point_types._id)
                ) as s
                ON 
                    (p._id = s.parent_id)
                WHERE
                    p.parent_id = $1
                AND 
                    p.point_type_id = $2
                GROUP BY 
                    p._id
            )a ) as points
        FROM
            posts
        WHERE
            _id = $1;
      `;
        pg.connect(conString, function(err, client, done) {
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            client.query(queryString, [req.params.id, type], function(err, result) {
                //call `done()` to release the client back to the pool
                done();
                if (err) throw err;
                if (!result.rows[0]) {
                    res.status(500).send('no issue found').end();
                } else {
                    if(result.rows[0].points === null){
                        result.rows[0].points = [];
                    }
                    res.status(200).send(result.rows[0]).end();
                }
            });
        });
    }
});
// ###########  POSTS   ###############
// post new issue
router.post('/newPost', jwt_verify, function(req, res) {
    console.log(new Date);
    var user = req.decoded;
    var info = req.body;
    var queryString = `
        INSERT INTO
          posts (
          owner_user_id,title,detail,post_type_id,parent_id,point_type_id,source,source_type_id,created_at)
        VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9)
        RETURNING
            *`;
    console.log(user);
    var queryParams = 
    [user.id, info.title, info.detail, info.post_type_id, info.parent_id,
    info.point_type_id, info.source, info.source_type_id, new Date];
    console.log(queryParams);
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query(queryString, queryParams, function(err, result) {
            //call `done()` to release the client back to the pool
            done();
            if (err) throw err;
            var postData = result.rows[0];

            var type;

            if(info.post_type_id === 1){
                type = (info.point_type_id === 1)? 'yes' : 'no';
                req.io.to('issues').emit('NewIssue', result.rows[0])
            }else
            if(info.post_type_id === 2){
                type = (info.point_type_id === 1)? 'yes' : 'no';
                req.io.to('issue'+result.rows[0].parent_id+'/'+type).emit('NewPost', postData)
            }else
            if(info.post_type_id === 3){
                type = info.correspond_main_point_type_id;
                console.log('New support: ', 'issue'+info.issue_id+'/'+type);
                req.io.to('issue'+info.issue_id+'/'+type).emit('NewPost', postData)
            }
            res.status(200).send({success: true}).end();
        });
    });
});
router.post('/updatePost', jwt_verify, function(req, res) {
    var queryString = `
        UPDATE
            posts
        SET 
            title = $1,
            detail = $2
        WHERE
            _id = $3::int;
      `;
    var post = req.body;
    console.log(post);
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        var updateParams = [post.title, post.detail, +post._id]
        console.log(updateParams);
        client.query(queryString, updateParams, function(err, result) {
            //call `done()` to release the client back to the pool
            done();
            if (err) throw err;
            res.status(200).send('UPDATED').end();
        });
    });
});
// post update to existing issue
// ###########  DELETES  ###############
// delete existing post
router.delete('/deletePost/:postId/:issueId/:mainPointType', jwt_verify, function(req, res) {
    // Catch incoming VARS if undefined
    var input_issueId = +req.params.issueId;
    var input_mainPointType = 
        (req.params.mainPointType === 'undefined')? undefined : req.params.mainPointType;
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        var queryString = `
        DELETE
        FROM posts
        WHERE
            posts._id = $1::int
        RETURNING 
            _id, point_type_id, post_type_id, parent_id, owner_user_id;
      `;
        client.query(queryString, [req.params.postId], function(err, result) {
            //call `done()` to release the client back to the pool
            done();
            if (err) throw err;
            console.log(JSON.stringify(result.rows[0]));
            var postDeleted = result.rows[0];
            var mainPointType;
            var pointTypeFromId;

            var issue_id,
                support_id,
                main_point_id;

            // Catch point type if deleted a main point
            if(postDeleted.post_type_id === 2){
                pointTypeFromId = (+postDeleted.point_type_id === 1)? 'yes' : 'no';
            }

            switch(postDeleted.post_type_id){
                case 1: // Issue
                    issue_id = postDeleted._id;
                    main_point_id = null;
                    support_id = null;
                    mainPointType = null;
                    break;
                case 2: // Main Point
                    issue_id = postDeleted.parent_id;
                    main_point_id = postDeleted._id;
                    support_id = null;
                    mainPointType = pointTypeFromId;
                    break;
                case 3: // Support Point
                    issue_id = input_issueId;
                    main_point_id = postDeleted.parent_id;
                    support_id = postDeleted._id;
                    mainPointType = input_mainPointType;
                    break;
            }

            // Emit template for all types
            var emitPayload = {
                post_type_id : postDeleted.post_type_id,
                owner_user_id : postDeleted.owner_user_id,
                issue_id : issue_id,
                main_point_id :  main_point_id,
                support_id : support_id,
                main_point_type : mainPointType
            }

            console.log('Main point type: ' + mainPointType);
            console.log('Payload: ', JSON.stringify(emitPayload));

            // Deleted a support point or main point
            if(mainPointType !== null){
                // Notify just the people looking at the main cooresponing
                //    main point type half of the issue
                req.io.to('issue'+issue_id+'/'+mainPointType).emit('DeletedPost', emitPayload);
            }else{ // Deleted an issue
                // Notify everyone on issues page
                req.io.to('issues').emit('DeletedIssue', {_id : postDeleted._id});
                // Notify everyone looking at the issue
                req.io.to('issue'+issue_id+'/yes').emit('DeletedPost', emitPayload);
                req.io.to('issue'+issue_id+'/no').emit('DeletedPost', emitPayload); 
            } 

            res.status(200).send('DELETED').end();
        });
    });
});
module.exports = router;