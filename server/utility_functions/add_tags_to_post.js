module.exports = function(req, res, next) {
    if(req.roSkipTags){
        next();
    }else{
        var result = req.roInfo;
        var tagsInfo = req.body.tags;
        var buildStatement = require('../custFunctions/bulkInsertStatementBuilder.js')
        (tagsInfo, result.rows[0]._id, result.rows[0].parent_id, 'INSERT INTO post_tags_xref(post_id, tag_id, parent_post_id) VALUES ');
        req.roConClient.query(buildStatement, function(err, postTagsResult) {
            if (err) throw err;
            next();
        });
    }
};