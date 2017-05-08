const ENVIRONMENT = process.env.NODE_ENV || 'development';

/* JWT secret keys can be anything, just be unique*/
const JWT_SECRET_KEY = 'inputYourTokenSecretKeyHERE';

function getConfig() {
	const DEV_CONFIG_SETTINGS = {
		jwt_secret: JWT_SECRET_KEY,
		env: ENVIRONMENT,
		primaryDB: 'yourProjectDevDbLink',
		searchDB: 'yourProjectDevSearchDbLink'
	};

	const PROD_CONFIG_SETTINGS = {
		jwt_secret: JWT_SECRET_KEY,
		env: ENVIRONMENT,
		primaryDB: 'yourProjectProductionDbLink',
		searchDB: 'yourProjectProductionSearchDbLink'
	};

	return (ENVIRONMENT === 'production')? PROD_CONFIG_SETTINGS : DEV_CONFIG_SETTINGS;
}

export {getConfig};
