module.exports = `
UPDATE
    posts
SET 
    title = $1,
    detail = $2
WHERE
    _id = $3::int;
`;