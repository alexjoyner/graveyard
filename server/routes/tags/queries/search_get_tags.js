module.exports = function(req, res, next) {
    req.roQueryParams = ['%' + req.params.searchTerm + '%', req.params.type];
    req.roQueryString = `
    SELECT 
        *
    FROM 
        tags
    WHERE 
        tag_name
    ILIKE
        $1
    AND
        tag_type_id = $2
    LIMIT
        5
    ;
  `;
    next();
}