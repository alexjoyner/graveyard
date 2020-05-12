var bonsai_url  =
	(process.env.NODE_ENV === 'production')?
		process.env.BONSAI_URL : 'localhost:9200';
import elasticsearch from 'elasticsearch';

const client = new elasticsearch.Client({
	host: bonsai_url
});

export {client};
