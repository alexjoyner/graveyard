var query = require('./_query');
import {search_db} from  '../../../../server';
/* LOCAL VARS*/
var query_info;

module.exports = function (req, callback) {
	query_info = query(req.params.search_term);
	let client = search_db();
	/* Get from elastic search*/
	client.search({
		index: 'voicir',
		type: 'posts',
		body: {
			query: {
				bool: query_info.searchInfo
			},
			highlight: {
				fields: {
					title: {}
				}
			}
		}
	}).then((data)=> {
		console.log('HI: ', data);
		callback(null, data.hits.hits);
	},(err) => {
		console.log('ERR: ', err);
		callback({
			status: 500,
			messages: 'something went wrong'
		});
	});
};