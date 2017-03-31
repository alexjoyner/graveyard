console.log('Env: ', process.env.NODE_ENV || 'development');
//Ex postgres://USERNAME:PASSWORD@metatruth-db.cuzf3tkrekn0.us-east-1.rds.amazonaws.com:PORT/projectname
var prod_db = 'your-project-production-db-link';

//Ex https://search-metatruth-elastic-kdinltq5njh5c63hn5s5xfq5ay.us-east-1.es.amazonaws.com
var prod_search_db = 'your-project-production-search-db-link';

//Ex postgres://rosco:@localhost:5432/voicir
var dev_db = 'your-project-dev-db-link';
//Ex localhost:9200
var dev_search_db = 'your-project-dev-db-link';

var config = {
	// Configuring the JSON Web tokens password
    secret: 'thisisareallycoolsecretpassword',
    ENV: process.env.NODE_ENV || 'development', // development || production
    db: '',
};

// Configure the database to use depending on the environment
config.db = (config.ENV === 'production')? prod_db : dev_db;
config.searchdb = (config.ENV === 'production')?
				''
			:
				"";
module.exports = config;
