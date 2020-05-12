'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var ENVIRONMENT = process.env.NODE_ENV || 'development';

/* JWT secret keys can be anything, just be unique*/
var JWT_SECRET_KEY = 'inputYourTokenSecretKeyHERE';

function getConfig() {
	var DEV_CONFIG_SETTINGS = {
		jwt_secret: JWT_SECRET_KEY,
		env: ENVIRONMENT,
		primaryDB: 'yourProjectDevDbLink',
		searchDB: 'yourProjectDevSearchDbLink'
	};

	var PROD_CONFIG_SETTINGS = {
		jwt_secret: JWT_SECRET_KEY,
		env: ENVIRONMENT,
		primaryDB: 'yourProjectProductionDbLink',
		searchDB: 'yourProjectProductionSearchDbLink'
	};

	return ENVIRONMENT === 'production' ? PROD_CONFIG_SETTINGS : DEV_CONFIG_SETTINGS;
}

exports.getConfig = getConfig;