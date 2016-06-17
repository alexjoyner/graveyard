module.exports = function(req, res, next) {
    var searchArray = req.params.searchTerm.split(' ');
    var preparedString = searchArray[0];
    console.log('Searching: ', searchArray);
    for (var i = 1; i < searchArray.length; i ++) {
        preparedString += ':* & ' + searchArray[i];
    }
    console.log('Searching: ', preparedString);
    req.roQueryParams = [preparedString, req.params.type];
    req.roQueryString = `
    SELECT 
        *
    FROM 
        posts
    WHERE 
        title
    @@
        to_tsquery($1)
    AND
        post_type_id = $2
    LIMIT
        5
    ;`;
    next();
};