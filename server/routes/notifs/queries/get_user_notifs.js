module.exports = function(req, res, next){
    var user = req.decoded;
    console.log(user.id)
    req.roQueryParams = [user.id];
    req.roQueryString = `
        SELECT 
            * 
        FROM
            user_notification_xref
        LEFT JOIN
            notifications
        ON
            (user_notification_xref.notif_id = notifications._id)
        WHERE
            user_id = $1
            AND
            is_read = false;
    `;
    next();
}