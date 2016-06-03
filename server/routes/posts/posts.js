'use strict';
var express = require('express'),
    router = express.Router();
var config = require('../../config/config.js');
var jwt_verify = require('../../middleware/jwt_verify.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;
// Special functions
var sortPosts = require('../../specialFunctions/sortPosts.js');
// !! route = '/posts'
// ###########  GETS  ###############
// get all
router.get('/all', jwt_verify, function(req, res) {
    // CONFIGURE QUERY INFO
    var queryString = `
        SELECT 
            p.*,
            json_agg(rP.*) as most_recent_point
        FROM 
            posts p
        LEFT JOIN (
            SELECT
                mostrecent.*
            FROM
                posts mostrecent
            ORDER BY
                created_at DESC
        ) as rP
        ON
            rP.parent_id = p._id
        WHERE
            p.post_type_id = 1
        GROUP BY
            p._id
        LIMIT
            40;
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
                var sortedPosts = sortPosts(result.rows);
                res.status(200).send(sortedPosts).end();
            }
        });
    });
});
// get one question by id and a type of yes/no
router.get('/post/:id/:type', jwt_verify, function(req, res) {
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
                    (p.point_type_id = 1
                OR
                    p.point_type_id = 2)
                GROUP BY 
                    p._id
            )a ) as points,
            (
            SELECT array_to_json(array_agg(row_to_json(t)))
            FROM (
            SELECT
                *
            FROM 
                post_tags_xref
            LEFT JOIN
                tags
            ON
                (post_tags_xref.tag_id = tags._id)
            WHERE
                post_id = $1) t) as tags
        FROM
            posts
        WHERE
            _id = $1;
      `;
        pg.connect(conString, function(err, client, done) {
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            client.query(queryString, [req.params.id], function(err, result) {
                //call `done()` to release the client back to the pool
                done();
                if (err) throw err;
                if (!result.rows[0]) {
                    res.status(500).send('no question found').end();
                } else {
                    if (result.rows[0].yess === null) {
                        result.rows[0].yess = [];
                    }
                    if (result.rows[0].nos === null) {
                        result.rows[0].nos = [];
                    }
                    res.status(200).send(result.rows[0]).end();
                }
            });
        });
    }
});
router.get('/search/:type/:searchTerm', jwt_verify, function(req, res){
    console.log('Search: ', req.params.searchTerm);
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        SELECT 
            *
        FROM 
            posts
        WHERE 
            title
        ILike
            $1
        AND
            post_type_id = $2
        LIMIT
            5
        ;
      `;
      client.query(queryString, ['%'+req.params.searchTerm+'%', req.params.type], function(err, result) {
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
// ###########  POSTS   ###############
// post new question
router.post('/newPost', jwt_verify, function(req, res) {
    console.log(new Date);
    var user = req.decoded;
    var postInfo = req.body.post;
    var tagsInfo = req.body.tags;
    var queryString = `
        INSERT INTO
          posts (
          private_question, owner_user_id,title,detail,post_type_id,parent_id,point_type_id,source,source_type_id,created_at)
        VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9, $10)
        RETURNING
            *`;
    console.log(postInfo);
    console.log(tagsInfo);
    var queryParams = [postInfo.privQ, user.id, postInfo.title, postInfo.detail, postInfo.post_type_id, postInfo.parent_id,
        postInfo.point_type_id, postInfo.source, postInfo.source_type_id, new Date
    ];
    console.log(queryParams);
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query(queryString, queryParams, function(err, result) {
            if (postInfo.post_type_id === 1) {
                if (err) throw err;
                var buildStatement = function(rows) {
                    var params = []
                    var chunks = []
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i]
                        var valueClause = []
                        params.push(result.rows[0]._id)
                        valueClause.push('$' + params.length)
                        params.push(row)
                        valueClause.push('$' + params.length)
                        params.push(result.rows[0].parent_id)
                        valueClause.push('$' + params.length)
                        chunks.push('(' + valueClause.join(', ') + ')')
                    }
                    return {
                        text: 'INSERT INTO post_tags_xref(post_id, tag_id, parent_post_id) VALUES ' + chunks.join(', '),
                        values: params
                    }
                }
                console.log('TAG INFO: ', tagsInfo);
                console.log(buildStatement(tagsInfo));
                client.query(buildStatement(tagsInfo), function(err, postTagsResult) {
                    // return client back to the pool
                    done();
                    if (err) throw err;
                    var postData = result.rows[0];
                    var type;
                    if (postInfo.post_type_id === 1) {
                        type = (postInfo.point_type_id === 1) ? 'yes' : 'no';
                        req.io.to('questions').emit('NewQuestion', result.rows[0])
                    } else
                    if (postInfo.post_type_id === 2) {
                        type = (postInfo.point_type_id === 1) ? 'yes' : 'no';
                        req.io.to('question' + result.rows[0].parent_id).emit('NewPost', postData)
                    } else
                    if (postInfo.post_type_id === 3) {
                        type = postInfo.correspond_main_point_type_id;
                        console.log('New support: ', 'question' + postInfo.question_id + '/' + type);
                        req.io.to('question' + postInfo.question_id).emit('NewPost', postData)
                    }
                    res.status(200).send({
                        success: true
                    }).end();
                });
            }else{
                done();
                if(err) throw err;
                var postData = result.rows[0];
                var type;
                if (postInfo.post_type_id === 2) {
                    type = (postInfo.point_type_id === 1) ? 'yes' : 'no';
                    req.io.to('question' + result.rows[0].parent_id).emit('NewPost', postData)
                } else
                if (postInfo.post_type_id === 3) {
                    type = postInfo.correspond_main_point_type_id;
                    console.log('New support: ', 'question' + postInfo.question_id + '/' + type);
                    req.io.to('question' + postInfo.question_id).emit('NewPost', postData)
                }
                res.status(200).send({
                    success: true
                }).end();
            }
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
// post update to existing question
// ###########  DELETES  ###############
// delete existing post
router.delete('/deletePost/:postId/:questionId/:mainPointType', jwt_verify, function(req, res) {
    // Catch incoming VARS if undefined
    var input_questionId = +req.params.questionId;
    var input_mainPointType = (req.params.mainPointType === 'undefined') ? undefined : req.params.mainPointType;
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
            var question_id,
                support_id,
                main_point_id;
            // Catch point type if deleted a main point
            if (postDeleted.post_type_id === 2) {
                pointTypeFromId = (+postDeleted.point_type_id === 1) ? 'yes' : 'no';
            }
            switch (postDeleted.post_type_id) {
                case 1: // Question
                    question_id = postDeleted._id;
                    main_point_id = null;
                    support_id = null;
                    mainPointType = null;
                    break;
                case 2: // Main Point
                    question_id = postDeleted.parent_id;
                    main_point_id = postDeleted._id;
                    support_id = null;
                    mainPointType = pointTypeFromId;
                    break;
                case 3: // Support Point
                    question_id = input_questionId;
                    main_point_id = postDeleted.parent_id;
                    support_id = postDeleted._id;
                    mainPointType = input_mainPointType;
                    break;
            }
            // Emit template for all types
            var emitPayload = {
                post_type_id: postDeleted.post_type_id,
                owner_user_id: postDeleted.owner_user_id,
                question_id: question_id,
                main_point_id: main_point_id,
                support_id: support_id,
                main_point_type: mainPointType
            }
            console.log('Main point type: ' + mainPointType);
            console.log('Payload: ', JSON.stringify(emitPayload));
            // Deleted a support point or main point
            if (mainPointType !== null) {
                // Notify just the people looking at the main cooresponing
                //    main point type half of the question
                req.io.to('question' + question_id).emit('DeletedPost', emitPayload);
            } else { // Deleted an question
                // Notify everyone on questions page
                req.io.to('questions').emit('DeletedQuestion', {
                    _id: postDeleted._id
                });
                // Notify everyone looking at the question
                req.io.to('question' + question_id).emit('DeletedPost', emitPayload);
            }
            res.status(200).send('DELETED').end();
        });
    });
});
module.exports = router;