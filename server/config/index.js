const ENVIRONMENT = process.env.NODE_ENV || 'development';

/* JWT secret keys can be anything, just be unique*/
const JWT_SECRET_KEY = 'inputYourTokenSecretKeyHERE';

const DEV_CONFIG_SETTINGS = {
	jwt_secret: JWT_SECRET_KEY,
	env: ENVIRONMENT,
	primaryDB: 'yourProjectDevDbLink',
	searchDB: 'yourProjectDevDbLink'
};

const PROD_CONFIG_SETTINGS = {
	jwt_secret: JWT_SECRET_KEY,
	env: ENVIRONMENT,
	primaryDB: 'yourProjectProductionDbLink',
	searchDB: 'yourProjectProductionSearchDbLink'
};

const APP_CONFIG_SETTINGS =
	(ENVIRONMENT === 'production')? PROD_CONFIG_SETTINGS : DEV_CONFIG_SETTINGS;

export {APP_CONFIG_SETTINGS};
export * from './accessHeaders';
export * from './cache';
