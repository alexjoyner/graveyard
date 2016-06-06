module.exports = function(req, res, next) {
    req.roQueryParams = ['%' + req.params.searchTerm + '%', req.params.type];
    req.roQueryString = `
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
    next();
}