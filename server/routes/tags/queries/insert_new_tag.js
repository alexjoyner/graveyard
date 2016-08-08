module.exports = function (req, res, next) {
    // TODO: if a user successfully submits a duplicate tag, it violates unique and breaks
    var info = req.body;
    req.roQueryParams = [info.tag_name, info.tag_type_id];
    req.roQueryString = `
    INSERT INTO
      tags (
      tag_nam,
      tag_type_id)
    VALUES (
      $1, $2)
    RETURNING
        *`;
    next();
}
