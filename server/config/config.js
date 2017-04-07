const ENVIRONMENT = process.env.NODE_ENV || 'development';

/* JWT secret keys can be anything, just be unique*/
const JWT_SECRET_KEY = 'inputYourTokenSecretKeyHERE';

const DEV_CONFIG_SETTINGS = {
    secret: JWT_SECRET_KEY,
    env: ENVIRONMENT,
    primaryDB: 'your-project-dev-db-link',
	searchDB: 'your-project-dev-db-link'
};

const PROD_CONFIG_SETTINGS = {
    secret: JWT_SECRET_KEY,
    env: ENVIRONMENT,
	primaryDB: 'your-project-production-db-link',
	searchDB: 'your-project-production-search-db-link'
};

module.exports = (ENVIRONMENT === 'production')? prod_db : dev_db;
