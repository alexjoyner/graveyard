'use strict';
var express = require('express'),
    router = express.Router();
var jwt_verify = require('../../middleware/jwt_verify.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = "postgres://rosco:@localhost:5432/postgres";
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
                res.status(500).send('no posts found').end();
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
                    res.status(500).send('no posts found').end();
                } else {
                    res.status(200).send(result.rows[0]).end();
                }
            });
        });
    }
});
// ###########  POSTS   ###############
// post new issue
router.post('/newPost', jwt_verify, function(req, res) {
    var user = req.decoded;
    var info = req.body;
    var returnInfo = (info.post_type_id === 1)? ' _id' : ' *';
    var queryString = `
        INSERT INTO
          posts (
          owner_user_id,title,detail,post_type_id,parent_id,point_type_id,source,source_type_id,created_at)
        VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9)
        RETURNING` + returnInfo;
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
            console.log('Post created ID: ', result.rows[0]);
            res.status(200).send(result.rows[0]).end();
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
router.delete('/deletePost/:postId', jwt_verify, function(req, res) {
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        var queryString = `
        DELETE
        FROM posts
        WHERE
            posts._id = $1::int;
      `;
        client.query(queryString, [req.params.postId], function(err, result) {
            //call `done()` to release the client back to the pool
            done();
            if (err) throw err;
            res.status(200).send('DELETED').end();
        });
    });
});
module.exports = router;