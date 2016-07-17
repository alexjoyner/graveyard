module.exports = function(req, res, next){
    var user = req.decoded;
    console.log(user.id)
    req.roQueryParams = [user.id, req.body.notif_id];
    req.roQueryString = `
    UPDATE
        user_notification_xref
    SET 
        is_read = true
    WHERE
        notif_id = $2::int
        AND
        user_id = $1::int;
    `;
    next();
}