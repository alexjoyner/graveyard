module.exports = function(req, res) {
    var result = req.roInfo;
    var tagsInfo = req.body.tags;
    var postInfo = req.body.post;
    var buildStatement = require('../../../../custFunctions/bulkInsertStatementBuilder.js')
        (tagsInfo, result.rows[0]._id, result.rows[0].parent_id, 'INSERT INTO post_tags_xref(post_id, tag_id, parent_post_id) VALUES ');
    req.roConClient.query(buildStatement, function(err, postTagsResult) {
        // return client back to the pool
        req.roDone();
        if (err) throw err;
        var postData = result.rows[0];
        var type;
        if (postInfo.post_type_id === 1) {
            //type = (postInfo.point_type_id === 1) ? 'yes' : 'no';
            res.status(200).send(result.rows[0]).end();
            //req.io.to('questions').emit('NewQuestion', result.rows[0])
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
        // res.status(200).send({
        //     success: true
        // }).end();
    });
};