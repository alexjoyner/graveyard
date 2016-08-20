module.exports = function(rows, _id, parent_id, preStatement) { // :TODO This should be more general, so notifications will work
    var params = []
    var chunks = []
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i]
        var valueClause = []
        params.push(_id)
        valueClause.push('$' + params.length)
        params.push(row)
        valueClause.push('$' + params.length)
        params.push(parent_id)
        valueClause.push('$' + params.length)
        chunks.push('(' + valueClause.join(', ') + ')')
    }
    return {
        text: preStatement + chunks.join(', '),
        values: params
    }
}