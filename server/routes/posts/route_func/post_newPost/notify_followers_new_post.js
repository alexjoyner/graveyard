module.exports = function (req, res, next) { //TODO: All three of these steps need to broken out into parts
    if (req.roSkipNotify) {
        next();
    } else {
        /* To notify the users of a new post
         You will need:
         1) Post Id
         2) Message Body
         Step 1)
         Using the post id, get all of users that are following that post
         Step 2)
         Create a notification
         Step 3)
         Link all the followers, not the creator, to the created notification with a bulk insert
         */
        var postInfo = req.roInfo.rows[0];
        var step1_query_string = `
            SELECT
                user_id
            FROM
                follows
            WHERE
                post_id = $1
                AND
                user_id != $2;
        `;
        var step2_query_string = `
            INSERT INTO
                notifications
                (title, post_id, created_at)
            VALUES
                ($1, $2, $3)
            RETURNING
                _id
        `;
        req.roConClient.query(step1_query_string, [postInfo.parent_id, req.decoded.id], function (err, followers) {
            if (err) throw err;
            if(followers.rows[0] !== undefined && followers.rows[0] !== null){
                var followersIds = getFollowerIds(followers.rows);
                req.roConClient.query(step2_query_string, [
                        'New post in something you have followed!', postInfo.parent_id, new Date()],
                    function (err, notification) {
                        if (err) throw err;
                        console.log('Notification! ', notification);
                        req.roConClient.query(buildNotifLinkStatement(
                            followersIds, notification.rows[0]._id, 'INSERT INTO user_notification_xref(user_id, notif_id) VALUES '),
                            function (err) {
                                if (err) throw err;
                                next();
                            })
                    })
            }else{
                next();
            }
        })
    }
};

function getFollowerIds(array) {
    var tempArray = [];
    for (var i = 0; i < array.length; i++) {
        tempArray.push(array[i].user_id);
    }
    return tempArray;
}

function buildNotifLinkStatement(rows, notif_id, preStatement) {
    var params = []
    var chunks = []
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i]
        var valueClause = []
        params.push(row)
        valueClause.push('$' + params.length)
        params.push(notif_id)
        valueClause.push('$' + params.length)
        chunks.push('(' + valueClause.join(', ') + ')')
    }
    return {
        text: preStatement + chunks.join(', '),
        values: params
    }
}