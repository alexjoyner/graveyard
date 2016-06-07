console.log('Env: ', process.env.NODE_ENV || 'development');
var config = {
	// Configuring the JSON Web tokens password
    secret: 'thisisareallycoolsecretpassword',
    ENV: '',
    db: '',
}
config.ENV = process.env.NODE_ENV || 'development', // development || production

// Configure the database to use depending on the environment
config.db = (config.ENV === 'production')
			?
				'postgres://roscoDB:1_Password@metatruth-db.cuzf3tkrekn0.us-east-1.rds.amazonaws.com:5432/metatruth'
			:
				"postgres://rosco:@localhost:5432/postgres";
module.exports = config;