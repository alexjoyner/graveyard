console.log('Env: ', process.env.NODE_ENV || 'development');

var config = {
	// Configuring the JSON Web tokens password
    secret: 'thisisareallycoolsecretpassword',
    ENV: process.env.NODE_ENV || 'development', // development || production
    db: '',
};

// Configure the database to use depending on the environment
var prod_db = 'your-project-production-db-link';
var dev_db = 'your-project-dev-db-link';

var prod_search_db = 'your-project-production-search-db-link';
var dev_search_db = 'your-project-dev-db-link';

config.db = (config.ENV === 'production')? prod_db : dev_db;
config.searchdb = (config.ENV === 'production')? prod_search_db : dev_search_db;

module.exports = config;
