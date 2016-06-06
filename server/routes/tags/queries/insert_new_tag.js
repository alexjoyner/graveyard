module.exports = function(req, res, next) {
    var info = req.body;
    req.roQueryParams = [info.tag_name, info.tag_type_id];
    req.roQueryString = `
    INSERT INTO
      tags (
      tag_name,
      tag_type_id)
    VALUES (
      $1, $2)
    RETURNING
        *`;
	next();
}