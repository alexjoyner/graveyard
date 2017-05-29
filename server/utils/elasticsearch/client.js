import elasticsearch from 'elasticsearch';

const client = new elasticsearch.Client({
	host: 'localhost:9200'
});

export {client};
