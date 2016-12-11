var query = require('./_query');
import {pg_query} from '../../../server';
export function get_all_posts(req, callback) {
	pg_query(query.string, query.params, function(err, result) {
		if (err) throw err;
		var issues = result.rows;
		callback(null, issues)
	});
};